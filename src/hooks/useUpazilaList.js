import { useEffect, useState } from "react";

const useUpazilaList = () => {
  const [upazilaList, setUpazilaList] = useState([]);

  // fetch all country name in usEffect
  useEffect(() => {
    fetch("/data/bd-upazila.json")
      .then((res) => res.json())
      .then((data) => setUpazilaList(data));
  }, []);
  return [upazilaList];
};

export default useUpazilaList;
