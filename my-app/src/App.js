import Header from './components/Header';
import ListDataAll from './components/ListDataAll';
import {ListData} from'./Data/listData.js';

function App() {
  // ListData.then(data => {
  //   console.log(data);
  // });
  let listData = ListData;

    return (
    <>
      <Header />
      <ListDataAll listData={listData}/>
    </>
    
  );

}

export default App;
