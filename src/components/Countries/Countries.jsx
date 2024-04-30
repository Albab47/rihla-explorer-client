import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import Loader from "../Loader/Loader";

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    const fetchData = async() => {
        const res = await fetch('https://rihla-explorer-server.vercel.app/countries');
        const data = await res.json();
        setCountries(data)
        setLoading(false)
    }
    fetchData()
  }, [])

  if(loading) {
    return <Loader />
  }
     
  return (
    <section className="my-24">
      <h1 className="text-center text-3xl md:text-5xl font-display dark:text-white ">Countries</h1>
      {/* Grid container */}
      <div className="max-w-screen-xl mx-auto mt-14 px-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-full md:col-span-2 flex justify-center items-center bg-amber-50 p-5 rounded-2xl">
            <h3 className="text-2xl md:text-4xl text-amber-600 font-display ">Explore the beauty of Middle East</h3>
        </div>

        {countries.map(country => (
            <CountryCard key={country.name} country={country} />
        ))}

      </div>
    </section>
  );
};

export default Countries;
