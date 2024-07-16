import { useContext } from'react';
import  {AgencyContext} from  "./context/agenciesContext"
import './App.css';



function App() {
const {agency} = useContext(AgencyContext)

  return (
    <div className="App">
      {agency.map((agency, i) => (
        <div key={i} className="agency">
          <h1>{agency.name}</h1>
          <img src={agency.logo} alt={`${agency.name} logo`} className="agency-logo" />
          <p>{agency.contact.address}</p>
          <p>{agency.contact.phone}</p>
          <p><a href={`mailto:${agency.contact.email}`}>{agency.contact.email}</a></p>
          <p><a href={agency.contact.url} target="_blank" rel="noopener noreferrer">{agency.contact.url}</a></p>
        </div>
      ))}
    </div>
  );
}

export default App;


