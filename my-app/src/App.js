import Header from './components/Header';
import ListDataItem from './components/ListDataitem.js';
import {listData} from'./Data/listData.js';

function App() {
  console.log(listData);
  return (
    <>
      <Header />
      <ListDataItem listData = {listData}/>
    </>
    
  );
}

export default App;
