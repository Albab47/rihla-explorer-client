import { useEffect } from "react";
import { useState } from "react";

const useSpotsData = () => {
  const [loadedSpots, setLoadedSpots] = useState([]);
  const [toggle, setToggle] = useState(false);

  const refetch = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://rihla-explorer-server.vercel.app/spots");
      const data = await res.json()
      setLoadedSpots(data)
    };
    fetchData()
  }, [toggle]);

  return {loadedSpots, refetch};
};

export default useSpotsData;
