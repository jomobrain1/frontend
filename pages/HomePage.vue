<template>
  <v-container>
    <div class="d-flex justify-space-between align-center">
      <v-text-field
        placeholder="Search For Amazing Packages"
        type="search"
        class="my-15"
        v-model="keyword"
      ></v-text-field>
      <v-btn variant="text" color="teal-accent-4" @click="search">
        Search
      </v-btn>
    </div>

    <v-sheet
      v-if="products.length === 0"
      class="d-flex justify-space-around flex-wrap bg-surface-variant"
    >
      <div v-for="product in $store.state.holidays" :key="product.id">
        <HolidayPackage :product="product" />
      </div>
    </v-sheet>

    <!-- Search Box -->
    <v-sheet
      v-if="products.length > 0"
      class="d-flex justify-space-around flex-wrap bg-surface-variant"
    >
      <v-sheet v-for="product in products" class="ma-2 pa-2" :key="product.id">
        <HolidayPackage :product="product" />
      </v-sheet>
    </v-sheet>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      keyword: "Dubai",
      products: [],
    };
  },

  methods: {
    ...mapActions(["getAllHoliday"]),
    async search() {
      const res = await axios.get(
        `https://backend-m0xoi0zjp-jomobrain1.vercel.app/holidays?keyword=${this.keyword}`
      );
      console.log(res.data);
      this.products = res.data;
    },
  },

  mounted() {
    this.getAllHoliday();
  },
};
</script>
