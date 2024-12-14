<template>
  <div class="header">
    <div
      class="dots absolute right-0 inset-0 h-1/2 w-1/2 bg-[radial-gradient(#BCCCDC_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="w-1/3 z-10 text">
      <h1 class="text-7xl">{{ currentPage }}</h1>
      <p class="mt-5">Wilkommen bei Medizintechnik Niessen</p>
    </div>
    <Image :name="image" class="image" />
  </div>
</template>
<script>
import Image from "../components/Image.vue";
export default {
  name: "Head",
  components: {
    Image,
  },
  props: {
    image: {
      type: String,
      Required: true,
    },
  },
  computed: {
    currentPage() {
      let cPage = window.location.pathname.split("/")[1];
      return cPage !== "" ? cPage.toUpperCase() : "HOME";
    },
  },
};
</script>
<style scoped>
.header {
  background: #edf2fb;
  height: 70vh;
  height: 70dvh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.image {
  width: 25%;
  border-radius: 0.5rem;
  z-index: 230;
}
@media only screen and (max-width: 1200px) {
  .image {
    width: 33%;
  }
}
@media only screen and (max-width: 800px) {
  .header {
    justify-content: space-between;
  }
  .header > * {
    margin: 2rem;
  }
  .image {
    width: 45%;
  }
}

@media only screen and (max-width: 600px) {
  .header {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    height: calc(100vh - 6rem);
    height: calc(100dvh - 6rem);
  }
  .header > * {
    width: 100%;
  }

  .image {
    border-radius: 0;
  }

  .text {
    padding-left: 1rem;
  }

  .dots {
    transform: translate(-30%, 50%);
  }
}
</style>
