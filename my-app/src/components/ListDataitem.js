import React from "react";
import Card from "../shared/card.js";

function ListDataItem({ item ,handleDelete }) {


    return(
       <Card>
           <h1><span className="left-side">Title : </span><span className="Right-side">{item.title}</span></h1>
           <h1><span className="left-side">Rating : </span><span className="Right-side">{item.rating}</span></h1>
           <button onClick={() => {handleDelete(item.id)}}>Delete</button>
       </Card>
    )
}

export default ListDataItem;