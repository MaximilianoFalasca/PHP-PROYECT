import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";


function EditTipoPropiedad(){
    let [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(()=>{
        
        let nombre=searchParams.get("nombre");
    },[]);

    return(
        <>
        
        </>
    );
}

export default EditTipoPropiedad;