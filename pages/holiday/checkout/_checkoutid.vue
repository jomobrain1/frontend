<template>
  <v-sheet class="ma-2 pa-2">
    <h2 align="center" class="my-5">Check out here</h2>
    <v-card class="mx-auto" max-width="344">
      <v-card-title class="d-flex justify-space-between"
        >{{ holiday.package_name }}
        <small>{{ format_date(holiday.depature_date) }}</small>
      </v-card-title>
      <v-card-text>
        <div>
          <v-img
            class="bg-white"
            width="300"
            :aspect-ratio="1"
            :src="holiday.image_url"
          ></v-img>
        </div>
        <div class="text--primary py-2">
          {{ holiday.description }}
        </div>
        <p class="d-flex justify-space-between">
          <b>KSH. {{ holiday.price }} </b>
          <b> {{ holiday.duration }} Days</b>
        </p>
      </v-card-text>
    </v-card>

    <CheckOut />
  </v-sheet>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import moment from "moment";
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
    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },
    async getHolidayById() {
      axios
        .get(`https://backend-m0xoi0zjp-jomobrain1.vercel.app/holidays/${this.$route.params.checkoutid}`)
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
          `https://backend-m0xoi0zjp-jomobrain1.vercel.app/holidays/${this.$route.params.holidayid}`
        )
        .then(() => {
          alert("Deleted");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getHolidayById();
  },
};
</script>
