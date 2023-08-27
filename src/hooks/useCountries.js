import { useEffect, useState } from "react";

const useCountries = () => {
  const [nationalities, setNationalities] = useState([]);

  // fetch all country name in usEffect

  useEffect(() => {
    fetch("/data/nationalities.json")
      .then((res) => res.json())
      .then((data) => setNationalities(data));
  }, []);
  return [nationalities];
};

export default useCountries;
