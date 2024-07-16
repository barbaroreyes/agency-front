import { useContext } from'react';
import  {AgencyContext} from  "../context/agenciesContext"
import {Link} from  "react-router-dom" 



const Home = () =>{
const { agencies} = useContext(AgencyContext);
 console.log(agencies)
return (
      <div className="group-container">
        <h3>DashBoard</h3>
        <Link to ="/createAgency" >Create New agency</Link>
      {agencies.map((agency, i) => (
       
        <Link to={`/${agency._id}`} key={i} className="agency">
          <img src={agency.logo} alt={`${agency.name} logo`} className="agency-logo" />
          <h1>{agency.name}</h1>
          <p>{agency.address}</p>
          
         {/*  <p>{agency.address}</p>
          <p>{agency.contact.phone}</p>
          <p><a href={`mailto:${agency.contact.email}`}>{agency.contact.email}</a></p>
          <p><a href={agency.contact.url} target="_blank" rel="noopener noreferrer">{agency.contact.url}</a></p>git  */}
        </Link>
        
        
      ))}
    </div>
)
}
export  default Home;