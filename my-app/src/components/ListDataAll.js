import React from "react";
import ListDataItem from "./ListDataitem.js";
import Card from "../shared/card.js";

function ListDataAll({ listData , handleDelete} ) {
    if(listData.length === 0){
        return(
            <Card>
                <h2>No Movie Found</h2>
            </Card>
        )
    }
    return( 
       <div>
           {listData.map((item) => 
           (<ListDataItem key={item.id} item={item} handleDelete={handleDelete}/>)
           )}
       </div>
    )             
}

export default ListDataAll;