import './App.css';
import React from 'react';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';



function App() {
  return (
    <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add" element={<AddEmployeeComponent />} />
            <Route path='/update/:id' element={<UpdateEmployeeComponent/>}/>
            {/* Add more routes here */}
          </Routes>
        </div>
        <FooterComponent />
     
    </BrowserRouter>
  );
}

export default App;
