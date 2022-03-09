import { useState, useEffect } from "react";

function useApi(url) {
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("loading");

  async function getFetchAsync() {
    try {
      const result = await fetch(url);
      if (result.status === 404) {
        setResult(null);
        setStatus("not found");
        return;
      }
      const data = await result.json();
      setResult(data);
      setStatus("success");
    } catch {
      setResult(null);
      setStatus("error");
    }
  }

  useEffect(() => {
    getFetchAsync();
  }, [url]);

  return { result, status };
}

export default useApi;