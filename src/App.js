import './index.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import BottomLine from './components/BottomLine';
import List from './components/List';
import {useGetItemsQuery} from './redux/api';
import { setFilter } from './redux/slice/slice';

function App() {

  const {data = [], isLoading} = useGetItemsQuery()
  const fill = setFilter()

  const changeStyles = () => {
    document.getElementById('welcome').style.display = 'none'
    document.getElementById('list_section').style.visibility = 'visible'
  }

  if(isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <Header />
      <Welcome changeStyles={changeStyles} />
      <List data={data} />
      <div>{console.log(fill)}</div>
      <BottomLine />
    </div>
  );

}

export default App