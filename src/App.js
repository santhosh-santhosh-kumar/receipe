import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './FrontPage/Header';
import Meal from './HomePage/Meal';
import { Context } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css'
import YourList from './YourList/YourList';
import AddReceipe from './Additems/AddReceipe';
import Category from './HomePage/Category';
import Details from './Details/Details';
import UpdateItem from './UpdateItem/UpdateItem';
import Saved from './Saved/Saved';
import LoginPage from './Login/LoginPage';
import Profile from './Login/Profile';
import Register from './Login/Register';
import UpdateProfile from './Login/UpdateProfile';

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
  <Route path='/:id' element={<Category />}></Route>
  <Route path='/details/:id' element={<Details />}></Route>
  <Route path='/update/:id' element={<UpdateItem />}></Route>
  <Route path='/saved' element={<Saved />}></Route>
  <Route path='/Profile' element={<Profile />}></Route>
  <Route path='/register' element={<Register />}></Route>
  <Route path='/profileupdate/:id' element={<UpdateProfile />}></Route>
</Routes>
</BrowserRouter>
</Context>
</>
  );
}

export default App;
