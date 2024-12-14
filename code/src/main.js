import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import "./style.css";

import App from "./App.vue";
import routes from "./router/router.js";
import PrimeVue from "primevue/config";
import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

const app = createApp(App);

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      300: "#074799",
      400: "#074799",
      500: "#074799",
      600: "#074799",
    },
  },
});

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: "red",
      darkModeSelector: "Lara",
      cssLayer: false,
    },
  },
});
app.use(createPinia());
app.use(routes);
app.use(autoAnimatePlugin);
app.mount("#app");
