import { setExperienceInfo } from "../redux/features/experience.feature";
import { store } from "../redux/store";
import publicInstance from "./axiosConfig";
import { getRequest } from "./globalApi";

const getExperienceInfo = async () => {
    const data = await getRequest("/siteinfo")
    store.dispatch(
        setExperienceInfo({
            data: data?.data?.data[0]
        })
    )
};

export default getExperienceInfo;