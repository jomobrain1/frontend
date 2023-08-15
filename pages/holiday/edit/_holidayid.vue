<template>
  <div>
    <v-container>
      <h2 align="center">Edit Package</h2>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <form @submit.prevent="update">
            <v-textField
              label="Package Name"
              v-model="holiday.package_name"
              type="text"
            ></v-textField>
            <v-textField
              label="Destination"
              v-model="holiday.destination"
              type="text"
            ></v-textField>
            <v-textField
              label="price"
              v-model="holiday.price"
              type="number"
            ></v-textField>
            <v-textField
              label="seats"
              v-model="holiday.seats"
              type="number"
            ></v-textField>
            <v-textField
              label="duration"
              v-model="holiday.duration"
              type="number"
            ></v-textField>
            <v-textField
              label="Image link"
              v-model="holiday.image_url"
              type="text"
            ></v-textField>

            <input type="date" v-model="holiday.depature_date" />
            <v-textarea
              label="Description"
              v-model="holiday.description"
            ></v-textarea>
            <v-btn color="primary" type="submit">Save</v-btn>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
    console.log(this.$route.params.holidayid, "Holidd");
  },
  methods: {
    ...mapActions(["updateHoliday"]),
    async getHolidayById() {
      axios
        .get(`http://localhost:4020/holidays/${this.$route.params.holidayid}`)
        .then((response) => {
          console.log(response.data);
          this.holiday = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    update() {
      console.log("dd", this.holiday);

      axios
        .put(
          `https://backend-gules-phi.vercel.app/holidays/${this.$route.params.holidayid}`,
          this.holiday
        )
        .then((response) => {
          console.log(response.data);
          this.$router.push("/HomePage");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    // this.holiday.depature_date = "2030-05-09T21:00:00.000Z";
    this.getHolidayById();
  },
};
</script>

<style lang="scss" scoped></style>
