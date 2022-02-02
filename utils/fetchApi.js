import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "adcfe621f9msh66cfd23b7e4bcd3p1dc02cjsn8185c1be69ac",
    },
  });

  return data;
};
