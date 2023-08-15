import axios from "axios";
const baseUrl = "https://backend-m0xoi0zjp-jomobrain1.vercel.app/holidays";
export const state = () => ({
  holidays: [],
  keyword: "",
});

export const getters = {
  holidays: (state) => {
    return state.holidays;
  },
};

export const mutations = {
  setHolidays(state, holidays) {
    state.holidays = holidays;
  },
};

export const actions = {
  async createHoliday(_, data) {
    const res = await axios.post(`${baseUrl}`, data);
  },

  async getAllHoliday({ commit }) {
    const res = await axios.get(`${baseUrl}`);
    console.log(res.data);
    commit("setHolidays", res.data);
  },

  async updateHoliday(_, data) {
    const res = await axios.post(`${baseUrl}`, data);
    this.$router.push("/holiday/view");
  },
};
