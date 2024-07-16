import { useContext } from'react';

import  {AgencyContext} from  "../context/agenciesContext";

const SingleComponent = () => {
    const { agency } = useContext(AgencyContext);
    const  single =  agency.find()
    
  return (
    <div>SingleComponent</div>
  )
}

export default SingleComponent