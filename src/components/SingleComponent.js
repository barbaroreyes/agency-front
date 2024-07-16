import { useContext } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { AgencyContext } from '../context/agenciesContext';
import  axios  from 'axios';
const SingleComponent = () => {
  const baseUrl = "https://project-agency-six.vercel.app/";
  const  {agencies,setAgencies}  = useContext(AgencyContext); // Ensure 'agencies' is used, not 'agency'
  const { id } = useParams(); // Get the id from the URL
  const navigate = useNavigate();

  // If the agencies array is empty, return a message
  if (!agencies.length) {
    return <div>No agencies available</div>;
  }

  // If no id is provided, return a message
  if (!id) {
    return <div>Please provide an agency id</div>;
  }

  // Find the single agency based on the id from the params
  const single = agencies.find(a => a._id === id);
   
  // Handle case where no matching agency is found
  if (!single) {
    return <div>Agency not found</div>;
  }
  const handleDelete = async ()=>{
        await axios
        .delete(
        `${baseUrl}api/agency/${id}
        `
      );
 
    const updatedAgencies = 
    agencies.filter(
      a =>a._id!== id
      );
    setAgencies(updatedAgencies);
    navigate("/");  // Navigate back to the home page when the agency is deleted.  Note: This will not work correctly in a single-page app (SPA) due to the nature of the navigation. For a SPA, you would typically use a state management library like Redux or MobX to manage the application state.  In this case, we're using React Router for routing.  If you're using a different routing library, you would need to adjust this accordingly.  However, the navigation will work as expected in a full-stack application.  If you're not using a routing library, you would need to manually update the URL in the browser's address bar when the agency is deleted.  This is a common requirement in single-page applications.  For example, if you were using React Router, you would use `navigate("/agencies
  }
  const { name, logo, email,address  ,phone, url} = single;

  return (
    <div className='group-container-details'>
    <div className='agency-details' >
      
      <img src={logo} alt={`${name} logo`} className="agency-logo" />
      <h4>{name}</h4>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Website: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
      <button onClick={()=> navigate("/")}>Home</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
    </div>
  );
};

export default SingleComponent;

