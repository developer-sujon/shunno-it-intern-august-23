import { store } from '../redux/store';
import publicInstance from './axiosConfig';
import { setServiceInfo } from '../redux/features/service.feature';

const getServiceInfo = () => {
    store.dispatch(
        setServiceInfo({
            data: [],
            isLoading: true,
            isError: false,
            isSuccess: false,
        })
    )
    publicInstance.get("/services")
        .then(({ data }) => {
            // console.log(data.data)
            store.dispatch(
                setServiceInfo({
                    data: data.data,
                    isLoading: false,
                    isError: false,
                    isSuccess: true,
                })
            )
        }
        )
        .catch((err) => {
            store.dispatch(
                setServiceInfo({
                    data: null,
                    isLoading: false,
                    isError: true,
                    isSuccess: false,
                })
            )
            console.log(err)
        })

};

export default getServiceInfo;