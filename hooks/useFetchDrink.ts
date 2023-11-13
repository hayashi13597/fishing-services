import { useEffect, useState } from "react";
import axios from "axios";
import { productType } from "../common.types";

const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000/api"
    : "https://fishing-services.vercel.app/api";

export default function useFetchDrink(url: string) {
  const [data, setData] = useState<productType[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(baseUrl + url);
        const data = response.data;
        const rod = data.data.filter(
          (d: productType) => d.category === "drink"
        );
        setData(rod);
      } catch (err) {
        setError(err);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
