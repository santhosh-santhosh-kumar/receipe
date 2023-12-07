import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Meal from './Meal';
import { Context } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css'
import YourList from './YourList';
import AddReceipe from './AddReceipe';
import Recent from './Recent';
import Category from './Category';
import Details from './Details';
import UpdateItem from './UpdateItem';

function App() {
  return (
<>
<Context>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Header />}></Route>
  <Route path='/Meal' element={<Meal />}></Route>
  <Route path='/AddReceipe' element={<AddReceipe />}></Route>
  <Route path='/Recent' element={<Recent />}></Route>
  <Route path='/YourList' element={<YourList />}></Route>
  <Route path='/category/:id' element={<Category />}></Route>
  <Route path='/details/:id' element={<Details />}></Route>
  <Route path='/update/:id' element={<UpdateItem />}></Route>
</Routes>
</BrowserRouter>
</Context>
</>
  );
}

export default App;
