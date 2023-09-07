import { store } from '../redux/store';
import publicInstance from './axiosConfig';
import { setServiceInfo } from '../redux/features/service.feature';
import { getRequest } from './globalApi';

const getServiceInfo = async () => {
    const data = await getRequest("/services")
    store.dispatch(
        setServiceInfo({
            data: data?.data?.data
        })
    )
};

export default getServiceInfo;