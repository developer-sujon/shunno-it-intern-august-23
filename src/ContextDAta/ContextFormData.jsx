import React, { createContext, useState } from 'react';

export const  UpdateProfileAll = createContext() ; 
const ContextFormData = ({Children}) => {

    const [Personinfo , setPersonalInfo] = useState({})


    const value = {Personinfo}
    return (
        <UpdateProfileAll.Provider value={value}>
          {Children}
        </UpdateProfileAll.Provider>
    );
}

export default ContextFormData;
