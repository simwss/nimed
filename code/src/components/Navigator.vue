<template>
  <ul
    class="m-5 nav h-fit top-32 flex"
    :class="{ sticky: !smallDevice, 'flex-col': !smallDevice }"
  >
    <li
      class="m-3"
      v-for="(paragraphs, sectionName) in abschnitte"
      :key="sectionName"
      @click.prevent="toggleCollapse(sectionName)"
      v-auto-animate
    >
      <h1>
        {{ sectionName + " " + (!collapsedSections[sectionName] ? "+" : "-") }}
      </h1>
      <ul class="ml-5" v-if="collapsedSections[sectionName]">
        <li
          v-for="(paragraph, name) in paragraphs"
          :key="name"
          @click.prevent.stop="navToParagpraph(sectionName, name)"
        >
          {{ name }}
        </li>
      </ul>
    </li>
  </ul>
  <!-- <DxList></DxList> -->
</template>

<script>
import DxList from "devextreme-vue/list";
export default {
  name: "Navigator",
  data: () => ({
    smallDevice: false,
    collapsedSections: {},
  }),
  props: {
    abschnitte: {
      type: Object,
      Required: true,
    },
  },
  methods: {
    toggleCollapse(sectionName) {
      this.collapsedSections[sectionName] =
        !this.collapsedSections[sectionName];
    },
    navToSection(name) {
      this.$emit("scrollTo", { sectionName: name, paragraphName: 0 });
    },
    navToParagpraph(sectionName, paragraphName) {
      this.$emit("scrollTo", {
        sectionName: sectionName,
        paragraphName: paragraphName,
      });
    },
    setSmallDevice() {
      this.smallDevice = window.innerWidth < 600;
    },
  },
  mounted() {
    this.setSmallDevice();
  },
  components: {
    DxList,
  },
};
</script>
<style scoped>
.nav {
  white-space: nowrap;
}
h1 {
  font-size: 1.2rem;
}
</style>
