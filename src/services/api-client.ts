import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4860cdf60fb54f799ddaff95c7fd74e8",
  },
});
