<template>
  <Head ref="head" image="placeholder.jpg" />
  <main class="relative">
    <Navigator :abschnitte="abschnitte" @scrollTo="scrollToParagraph" />
    <div class="content">
      <div
        v-for="(abschnitt, sectionName) in abschnitte"
        :key="sectionName"
        class="mt-5"
        :id="`section-${sectionName}-0`"
      >
        <h1>{{ sectionName }}</h1>
        <p
          v-for="(paragraph, name) in abschnitt"
          :key="name"
          :id="`section-${sectionName}-${name}`"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </main>
  <div class="w-full products pt-7">
    <Carousel
      :value="products"
      :numVisible="4"
      :numScroll="2"
      circular
      :autoplayInterval="3000"
      :responsiveOptions="responsiveOptions"
      class=""
    >
      <template #item="product">
        <div
          class="flex flex-col justify-center border border-surface-200 dark:border-surface-700 rounded m-2 p-4 bg-white h-full"
        >
          <div class="flex justify-center flex-col items-center">
            <Image :name="product.data" class="w-32 rounded-lg h-full" />
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>
<script>
import Head from "../components/Head.vue";
import text from "../files/home.json";
import Navigator from "../components/Navigator.vue";
import Carousel from "primevue/carousel";
import Image from "../components/Image.vue";

export default {
  name: "home",
  data: () => ({
    abschnitte: text,
    products: [
      "companies/ARDO.png",
      "companies/Gloor.png",
      "companies/Greggersen.png",
      "companies/Heyer_Aerotech.png",
      "companies/Modultechnik.png",
      "companies/Provita.png",
      "companies/Serres.jpg",
    ],
    responsiveOptions: [
      {
        breakpoint: "1199px", // For screens with max-width 1199px
        numVisible: 3, // 4 items visible per page
        numScroll: 3, // Scroll 2 items at a time
      },
      {
        breakpoint: "767px", // For screens with max-width 767px
        numVisible: 2, // 2 items visible per page
        numScroll: 1, // Scroll 1 item at a time
      },
      {
        breakpoint: "480px", // For screens with max-width 480px
        numVisible: 1, // 1 item visible per page
        numScroll: 1, // Scroll 1 item at a time
      },
    ],
  }),
  computed: {
    smallDevice() {
      return window.innerWidth < 600;
    },
  },
  methods: {
    scrollToParagraph(obj) {
      let elementId = "section-" + obj.sectionName + "-" + obj.paragraphName;
      const targetElement = document.getElementById(elementId);
      console.log(targetElement.offsetTop);
      window.scrollTo({
        top:
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          document.querySelector(".NavBar").offsetHeight -
          20,
        behavior: "smooth",
      });
    },
  },
  components: {
    Head,
    Navigator,
    Image,
    Carousel,
  },
};
</script>
<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
}
p {
  margin: 5rem;
}
h1 {
  font-size: 2rem;
  font-weight: 500;
}
.products {
  background: #edf2fb;
}

@media only screen and (max-width: 600px) {
  main {
    grid-template-columns: 1fr;
  }
}
</style>
