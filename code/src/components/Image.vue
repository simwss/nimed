<template>
  <img :src="`./src/files/${name}`" class="bg-no-repeat object-cover" />
</template>
<script>
export default {
  name: "Image",
  props: {
    name: {
      type: String,
      Required: true,
    },
  },
};
</script>
