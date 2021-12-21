import React from "react";
function ListDataItem({listData}){
    console.log({listData})
    return(
        <>
            <h1>{listData[0].id}</h1>
        </>
    )
}

export default ListDataItem;