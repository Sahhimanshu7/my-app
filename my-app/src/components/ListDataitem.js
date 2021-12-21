import React from "react";
function ListDataItem({listData}){
    console.log({listData})
    return(
       <card>
           <h1>{listData}</h1>
       </card>
    )
}

export default ListDataItem;