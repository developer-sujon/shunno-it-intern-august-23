import { teamSection } from "../redux/features/teamSlice";
import { store } from "../redux/store";
import { getRequest } from "./RestClient";

const getTeam = async() => {
    const data = await getRequest('/teams');
    store.dispatch(teamSection(data));
};

export default getTeam;
