import { configureStore } from "@reduxjs/toolkit";
import FormDAtaSlice from "../FormDataSlice/FormDAtaSlice";

const store = configureStore({
    reducer : {
        FromGetData : FormDAtaSlice ,
    }
})


export default store
