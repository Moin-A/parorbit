import react, { useEffect, useState } from "react";
import axios from "axios";

const Api = (Api) => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const result = await axios(Api).then((x) => setData(x.data.users));
  }, []);

  return [data];
};

export default Api;
