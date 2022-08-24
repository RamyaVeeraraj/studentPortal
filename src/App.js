// import File from "./File";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import MyFunction from "./AxiosGet";
import Crud from './Crud'
import Login from './Login'
import Logout from './Logout'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Crud/>}  />
          <Route  path="/Login" element={<Login/>}  />
          <Route  path="/Logout" element={<Logout/>}  />
        </Routes>
      </BrowserRouter>
   
        {/* <MyFunction/> */}
        {/* <Crud/> */}
        {/* <Login/>  */}
        {/* <Logout/> */}
        {/* <File/> */}


    </div>
  );
}

export default App;
