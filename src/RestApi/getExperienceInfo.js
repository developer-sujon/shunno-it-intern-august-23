import { setExperienceInfo } from "../redux/features/experience.feature";
import { store } from "../redux/store";
import publicInstance from "./axiosConfig";

const getExperienceInfo = () => {
    store.dispatch(
        setExperienceInfo({
            data: [],
            isLoading: true,
            isError: false,
            isSuccess: false,
        })
    )
    publicInstance
        .get("/siteinfo")
        .then(({ data }) => {
            // console.log(data)
            store.dispatch(
                setExperienceInfo({
                    data: data?.data?.[0],
                    isLoading: false,
                    isError: false,
                    isSuccess: true,
                })
            );
        })
        .catch(() => {
            store.dispatch(
                setExperienceInfo({
                    data: null,
                    isLoading: false,
                    isError: true,
                    isSuccess: false,
                })
            );
        })

};

export default getExperienceInfo;