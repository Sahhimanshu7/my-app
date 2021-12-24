import React from "react";
import ListDataItem from "./ListDataitem.js"

function ListDataAll({ listData} ) {
    return( 
       <div>
           {listData.map((item) => 
           (<ListDataItem key={item.id} item={item}/>)
           )}
       </div>
    )             
}

export default ListDataAll;