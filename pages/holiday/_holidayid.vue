<template>
  <v-sheet class="ma-2 pa-2">
    <v-card class="mx-auto" max-width="344">
      <v-card-title>{{ holiday.package_name }}</v-card-title>
      <v-card-text>
        <div>
          <v-img
            class="bg-white"
            width="300"
            :aspect-ratio="1"
            :src="holiday.image_url"
          ></v-img>
        </div>
        <div class="text--primary">
          {{ holiday.description }}
        </div>
      </v-card-text>
      <v-card-actions class="d-flex justify-space-between">
        <v-btn variant="text" @click="deleteHoliday" color="error">
          Delete
        </v-btn>
        <v-btn variant="text" color="#5865f2">
          <nuxt-link
            style="text-decoration: none; color: #ffff"
            :to="`/holiday/edit/${this.$route.params.holidayid}`"
            >Edit</nuxt-link
          >
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      id: "",
      holiday: {},
    };
  },

  created() {
    console.log(this.$route.params.holidayid);
  },
  methods: {
    async getHolidayById() {
      axios
        .get(`https://backend-gules-phi.vercel.app/holidays/${this.$route.params.holidayid}`)
        .then((response) => {
          console.log(response.data);
          this.holiday = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteHoliday() {
      axios
        .delete(
          `https://backend-gules-phi.vercel.app/holidays/${this.$route.params.holidayid}`
        )
        .then(() => {
          this.$router.push("/HomePage");
          alert("Deleted");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.holiday.depature_date = "2030-05-09T21:00:00.000Z";
    this.getHolidayById();
  },
};
</script>

<style lang="scss" scoped></style>
