import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const SpotDetailsPage = () => {
  const spot = useLoaderData();

  return <div>spot details page of {spot._id}</div>;
};

const spotLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/spots/${params.id}`);
  const data = await res.json();
  return data;
};

export { SpotDetailsPage as default, spotLoader };
