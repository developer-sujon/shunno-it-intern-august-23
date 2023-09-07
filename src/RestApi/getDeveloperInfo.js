import { setDeveloperInfo } from "../redux/features/developer.feature";
import { store } from "../redux/store";
import { getRequest } from "./globalApi";

const getDeveloperInfo = async () => {
    const data = await getRequest("/teams")
    store.dispatch(
        setDeveloperInfo({
            data: data?.data?.data
        })
    )
};

export default getDeveloperInfo;