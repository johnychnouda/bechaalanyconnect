import axios from "axios";

export default function (locale: string) {
  axios.defaults.baseURL =
    "http://127.0.0.1:8000/api/" + locale;
}