import { useEffect, useState } from "react";
const useDivisionList = () => {
  const [divisionList, setDivisionList] = useState([]);

  // fetch all country name in usEffect
  useEffect(() => {
    fetch("/data/bd-divisionList.json")
      .then((res) => res.json())
      .then((data) => setDivisionList(data));
  }, []);
  return [divisionList];
};

export default useDivisionList;
