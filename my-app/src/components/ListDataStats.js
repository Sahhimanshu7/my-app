
function ListDataStats({listData}){
    console.log(listData);
    
    const average = listData.map(item => item.rating+item.rating);

    return(
        <div className="list-data-stats">
            <h1>{listData.length} reviews</h1>
            <h1>Average ratings : {average}</h1>
        </div>
    )
}

export default ListDataStats;