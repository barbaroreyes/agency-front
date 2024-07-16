import {Routes ,Route} from "react-router-dom"
import Home from './pages/Home';
import SingleComponent from './components/SingleComponent';
import './App.css';



function App() {


  return ( <>
   <Routes> 
     <Route path="/" element={<Home/>} />
     <Route path="/agency/:id" element={<SingleComponent/>} />
   </Routes>
          </>
   
     )
}

export default App;


