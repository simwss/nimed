<template>
  <div
    class="w-full NavBar h-24 sticky top-0 flex items-center z-40"
    v-auto-animate
  >
    <div
      class="w-full h-full flex items-center justify-center"
      v-if="largeScreen"
    >
      <Image name="logo.png" class="w-32 mr-5" />
      <router-link
        v-for="(item, index) in items"
        :to="item.route"
        :key="index"
        class="nav_item w-fit p-4 text-lg"
      >
        {{ item.label }}
      </router-link>
    </div>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 8 8"
      class="m-5"
      @click="toggleVisibility"
    >
      <path fill="black" d="M0 1v1h8V1zm0 2.97v1h8v-1zm0 3v1h8v-1z" />
    </svg>
    <div class="dropdown" v-if="visible">
      <Image name="logo.png" class="w-1/2 m-5 float-left" />
      <router-link
        @click="toggleVisibility"
        ref="dropdown"
        v-for="(item, index) in items"
        :to="item.route"
        :key="index"
      >
        {{ item.label }}
      </router-link>
      <Button class="w-3/4 mt-10" @click="toggleVisibility">Zurück</Button>
    </div>
  </div>
  <div
    class="bar h-2 z-50 sticky top-24"
    :style="`width:${scrollBarWidth}%`"
    ref="bar"
  ></div>
</template>

<script>
import Image from "@/components/Image.vue";
import { vAutoAnimate } from "@formkit/auto-animate";
import Button from "primevue/button";

export default {
  name: "NavBar",
  data: () => ({
    items: [],
    visible: false,
    scrollBarWidth: 0,
  }),
  props: {
    views: {
      type: Array,
    },
  },
  components: {
    Image,
    Button,
  },
  mounted() {
    this.calculateScrollBarWidth();
    window.addEventListener("resize", this.calculateScrollBarWidth);
    window.addEventListener("scroll", this.calculateScrollBarWidth);
    let arr = [];
    this.views.forEach((view) => {
      let route = this.$router.resolve({
        name: view.name,
      }).matched[0];
      arr.push(route);
    });
    this.items = this.convertRoutesToNewFormat(arr);
  },
  methods: {
    calculateScrollBarWidth() {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      this.scrollBarWidth = (scrollPosition / scrollHeight) * 100 || 0;
    },
    convertRoutesToNewFormat(routes) {
      let newRoutes = routes.map((route) => {
        const newRoute = {
          label: route.meta.title,
        };
        newRoute.route = route.path;
        return newRoute;
      });
      return newRoutes;
    },
    toggleVisibility() {
      this.visible = !this.visible;
      if (this.visible) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";
    },
  },
  computed: {
    largeScreen() {
      return window.innerWidth > 800;
    },
  },
};
</script>
<style scoped>
.NavBar {
  background-color: #edf2fb;
  z-index: 10000000000;
}
.nav_item {
  position: relative;
  height: 100%;
  align-content: center;
  transition: 0.3s;
}
.nav_item:hover {
  color: #5d698c;
}
.nav_item:hover::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #5d698c;
}

img {
  mix-blend-mode: multiply;
}

.dropdown {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  z-index: 10000000;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
}

.dropdown > *:not(:first-child):not(:last-child) {
  width: 100%;
  border-bottom: 1px solid gray;
  padding: 1rem;
  font-weight: bold;
}
.bar {
  background-color: #bcccdc;
  margin-top: -100px;
  z-index: 1200;
}
</style>
