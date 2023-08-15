<template>
  <v-app>
    <v-app-bar color="#E6EE9C" :clipped-left="clipped" fixed app>
      <nuxt-link to="/"> <v-toolbar-title v-text="title" /></nuxt-link>
      <v-spacer />

      <v-toolbar-title>
        <nuxt-link
          to="/holiday/create"
          class="mx-4"
          style="text-decoration: none; color: inherit"
          >create
        </nuxt-link>
        <nuxt-link
          to="/homepage"
          class="mx-4"
          style="text-decoration: none; color: inherit"
          >packages
        </nuxt-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Tripitaca",
    };
  },
};
</script>
