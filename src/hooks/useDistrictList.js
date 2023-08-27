import { useEffect, useState } from "react";
const useDistrictList = () => {
  const [districtList, setDistrictList] = useState([]);

  useEffect(() => {
    fetch("/data/districtList.json")
      .then((res) => res.json())
      .then((data) => setDistrictList(data));
  }, []);

  return [districtList];
};

export default useDistrictList;
