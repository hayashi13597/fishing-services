import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://provinces.open-api.vn/api/";

export default function useFetchSelect(url: string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(baseUrl + url);
        const data = response.data;
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
