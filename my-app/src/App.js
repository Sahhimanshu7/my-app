import React, {useState} from 'react';
import Header from './components/Header';
import ListDataAll from './components/ListDataAll';
import {ListData} from'./Data/listData.js';

function App() {

  const [listData, setListData] = useState(ListData);

  const handleDelete = (id) => {
    setListData(listData.filter(item => item.id !== id));
  }

    return (
    <>
      <Header />
      <ListDataAll listData={listData} handleDelete = {handleDelete}/>
    </>
    
  );

}

export default App;
