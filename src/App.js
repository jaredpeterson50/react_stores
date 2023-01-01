import TopNavBar from './TopNavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import AddStore from './AddStore';
import Home from './Home';
import DisplayStores from './DisplayStores';
import AddItem from './AddItem';
import Table from './Table';

function App() {
  return (
      <div className="App"> 
      <Router>
        <TopNavBar/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path='/AddStore' element={<AddStore/>}></Route>
          <Route path='/DisplayStores' element={<DisplayStores/>}></Route>
          <Route path='/AddItem' element={<AddItem/>}></Route>
          <Route path='/Table' element={<Table/>}></Route>
        </Routes>
      </Router>

      </div>
  );
}

export default App;
