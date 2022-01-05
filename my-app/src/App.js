import React, {useState} from 'react';
import Header from './components/Header';
import ListDataAll from './components/ListDataAll';
import {ListData} from'./Data/listData.js';
import ListDataStats from './components/ListDataStats';

function App() {
  

  const [listData, setListData] = useState(ListData);

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you waant to delete this item?')){
    setListData(listData.filter(item => item.id !== id));
    }
  }

    return (
    <>
      <Header />
      <ListDataStats listData={listData}/>
      <ListDataAll listData={listData} handleDelete = {handleDelete}/>
    </>
    
  );

}

export default App;
