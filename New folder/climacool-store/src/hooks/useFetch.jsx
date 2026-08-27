import { useEffect, useState } from "react";

const useFetch = () => {
  const [footWears, setFootWears] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("https://sneakers-api-cmkf.onrender.com").then((res) => res.json())
      .then((json) => setFootWears(json))
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { footWears, loading, err};
};

export default useFetch;
