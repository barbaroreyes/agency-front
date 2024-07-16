import { useContext } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { AgencyContext } from '../context/agenciesContext';

const SingleComponent = () => {
  const  {agencies}  = useContext(AgencyContext); // Ensure 'agencies' is used, not 'agency'
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

  const { name, logo, email,address  ,phone, url} = single;

  return (
    <div className='group-container-details'>
    <div className='agency-details' onClick={()=> navigate("/")}>
      
      <img src={logo} alt={`${name} logo`} className="agency-logo" />
      <h4>{name}</h4>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Website: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
    </div>
    </div>
  );
};

export default SingleComponent;

