import {useState , createContext,  useEffect} from "react";
import axios from 'axios';
const  AgencyContext = createContext();

export const AgencyProvider = ({children}) => {
const baseUrl = "https://project-agency-six.vercel.app";

   const [agencies, setAgencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const  fetchingData = async ( ) => {


 await axios.get(`${baseUrl}/api/agency`)
      .then(response => {
       setAgencies(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Failed to fetch data');
        setLoading(false);
      });
    }

  useEffect(() => {
   fetchingData()
  }, []);

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  if (error) {
    return <div className="App">{error}</div>;
  }

    return (
        <AgencyContext.Provider value={{agencies,setAgencies}}>
            {children}
        </AgencyContext.Provider>


    )
}

export {AgencyContext} ;

