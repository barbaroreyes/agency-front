import {Routes ,Route} from "react-router-dom"
import Home from './pages/Home';
import CreateAgency from './pages/CreateAgency';
import SingleComponent from './components/SingleComponent';
import './App.css';



function App() {


  return ( <>
   <Routes> 
     <Route path="/" element={<Home/>} />
     <Route 
     path="/createAgency"
      element={<CreateAgency/>} 
      /> 
     <Route 
     path="/:id" 
     element={<SingleComponent/>}
      />
   </Routes>
          </>
   
     )
}

export default App;


