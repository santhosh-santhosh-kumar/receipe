import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Meal from './Meal';
import { Context } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css'
import YourList from './YourList';
import AddReceipe from './AddReceipe';
import Category from './Category';
import Details from './Details';
import UpdateItem from './UpdateItem';
import Saved from './Saved';
import LoginPage from './LoginPage';
import Profile from './Profile';
import Register from './Register';

function App() {
  return (
<>
<Context>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Header />}></Route>
  <Route path='/Meal' element={<Meal />}></Route>
  <Route path='/AddReceipe' element={<AddReceipe />}></Route>
  <Route path='/login' element={<LoginPage />}></Route>
  <Route path='/YourList' element={<YourList />}></Route>
  <Route path='/category/:id' element={<Category />}></Route>
  <Route path='/details/:id' element={<Details />}></Route>
  <Route path='/update/:id' element={<UpdateItem />}></Route>
  <Route path='/saved' element={<Saved />}></Route>
  <Route path='/Profile' element={<Profile />}></Route>
  <Route path='/register' element={<Register />}></Route>
</Routes>
</BrowserRouter>
</Context>
</>
  );
}

export default App;
