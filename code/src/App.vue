<script>
import NavBar from "./components/Navbar.vue";
export default {
  name: "app",
  data: () => ({
    pages: [
      { name: "home" },
      { name: "about" },
      { name: "produkte" },
      { name: "kontakt" },
      { name: "impressum" },
    ],
  }),
  components: {
    NavBar,
  },
};
</script>

<template>
  <NavBar :views="pages" />
  <RouterView />
</template>
