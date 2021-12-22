import React from "react";
import Card from "../shared/card.js";
function ListDataItem({listData}){
    console.log({listData});
    return(
       <Card>
           <h1>{listData.id}</h1>
           <h1>Hello</h1>
       </Card>
    )
}

export default ListDataItem;