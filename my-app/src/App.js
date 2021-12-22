import Header from './components/Header';
import ListDataItem from './components/ListDataitem.js';
import {ListData} from'./Data/listData.js';

function App() {
  // ListData.then(data => {
  //   console.log(data);
  // });
  let listData = ListData;
    return (
    <>
      <Header />
      <ListDataItem listData={listData}/>
    </>
    
  );

}

export default App;
