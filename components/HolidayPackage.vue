<template>
  <v-card max-width="344">
    <v-card-title>{{ product.package_name }}</v-card-title>
    <v-card-text>
      <div>
        <v-img
          class="bg-white"
          width="300"
          :aspect-ratio="1"
          :src="product.image_url"
        ></v-img>
      </div>
      <div class="text--primary">
        {{ product.description }}
      </div>
    </v-card-text>
    <v-card-actions class="d-flex justify-space-between">
      <v-btn variant="text" color="teal-accent-4">
        <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="`/holiday/${product._id}`"
          >View More</nuxt-link
        >
      </v-btn>

      <v-btn variant="text" color="#CDDC39">
        <nuxt-link
          style="text-decoration: none; color: #ffff"
          :to="`/holiday/checkout/${product._id}`"
          >Checkout</nuxt-link
        >
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style lang="scss" scoped></style>
