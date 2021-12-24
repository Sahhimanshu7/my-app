import React from "react";
import Card from "../shared/card.js";

function ListDataItem({ item }) {

    return(
       <Card>
           <h1><span className="left-side">Title : </span><span className="Right-side">{item.title}</span></h1>
           <h1><span className="left-side">Rating : </span><span className="Right-side">{item.rating}</span></h1>
       </Card>
    )
}

export default ListDataItem;