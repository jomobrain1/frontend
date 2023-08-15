<template>
  <div>
    <v-container>
      <h2 align="center">Create Package</h2>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <form @submit.prevent="create">
            <v-textField
              label="Package Name"
              v-model="package_name"
              type="text"
            ></v-textField>
            <v-textField
              label="Destination"
              v-model="destination"
              type="text"
            ></v-textField>
            <v-textField
              label="price"
              v-model="price"
              type="number"
            ></v-textField>
            <v-textField
              label="seats"
              v-model="seats"
              type="number"
            ></v-textField>
            <v-textField
              label="duration"
              v-model="duration"
              type="number"
            ></v-textField>
            <v-textField
              label="Image link"
              v-model="image_url"
              type="text"
            ></v-textField>
            <input type="date" v-model="depature_date" />

            <v-textarea label="Description" v-model="description"></v-textarea>
            <v-btn color="primary" type="submit">Save</v-btn>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      package_name: "",
      description: "",
      price: "",
      destination: "",
      image_url: "",
      depature_date: "",
      duration: "",
      seats: "",
    };
  },
  methods: {
    ...mapActions(["createHoliday"]),
    create() {
      if (
        !this.description ||
        !this.destination ||
        !this.price ||
        !this.image_url ||
        !this.package_name ||
        !this.duration ||
        !this.seats
      ) {
        alert("Please fill all the field");
      } else {
        const data = {
          package_name: this.package_name,
          description: this.description,
          price: this.price,
          destination: this.destination,
          image_url: this.image_url,
          depature_date: this.depature_date,
          duration: this.duration,
          seats: this.seats,
        };
        this.createHoliday(data);
        this.$router.push("/HomePage");
      }
    },
  },
};
</script>
