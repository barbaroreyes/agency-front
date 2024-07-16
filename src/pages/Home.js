import { useContext } from'react';
import  {AgencyContext} from  "../context/agenciesContext"
import {Link} from  "react-router-dom"



const Home = () =>{
const agencies = useContext(AgencyContext);
 
 //render agencies here
 //map through agency array and return JSX for each agency
 //each JSX element should render agency details such as name, logo, contact info, and a link to their website
 //use the AgencyContext to access the agency data
 //use the map function to create JSX elements for each agency in the agency array
 //each JSX element should have a unique key prop to identify it in the list
 //use the target="_blank" and rel="noopener noreferrer" attributes on the link to open the website in a new tab
 //use the mailto: and href attributes to open the agency's email in the user's default email client
 //use the target="_blank" and rel="noopener noreferrer" attributes on the link to open the agency's website in a new tab
 //use the target="_blank" and rel="noopener noreferrer" attributes on the link to open the agency's website in a new tab
return (
      <div className="group-container">
      {agencies.map((agency, i) => (
       
        <Link to={`/${agency._id}`} key={i} className="agency">
          <img src={agency.logo} alt={`${agency.name} logo`} className="agency-logo" />
          <h1>{agency.name}</h1>
          <p>{agency.contact.address}</p>
          <p>{agency.contact.phone}</p>
          <p><a href={`mailto:${agency.contact.email}`}>{agency.contact.email}</a></p>
          <p><a href={agency.contact.url} target="_blank" rel="noopener noreferrer">{agency.contact.url}</a></p>
        </Link>
        
      ))}
    </div>
)
}
export  default Home;