import { useEffect } from "react";
import { useState } from "react";

const useSpotsData = () => {
  const [spots, setSpots] = useState([]);
  const [toggle, setToggle] = useState(false);

  const refetch = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/spots");
      const data = await res.json()
      setSpots(data)
    };
    fetchData()
  }, [toggle]);

  return {spots, refetch};
};

export default useSpotsData;
