import axios from "axios";
import rawgAPIKey from "../.rawgAPIKey";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: rawgAPIKey,
  },
});
