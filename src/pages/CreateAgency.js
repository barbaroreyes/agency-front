import {useState} from 'react';
import {useNavigate} from  "react-router-dom"
import axios from 'axios';
const CreateAgency = () =>{
    const baseUrl = "https://project-agency-six.vercel.app/";
    const navigate = useNavigate();

    const [agency, setAgency] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        url: '',
        logo: '',
    })
    // Implement form to create agency
    const handleChange = (e) =>{
        console.log(e.target.value);
        setAgency(
            {
            ...agency, 
            [e.target.name]: e.target.value,
            }
        )
      
    }
     const  handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await axios.post(`${baseUrl}api/agency`,agency)
            .then(response => {
                console.log(response);
                
            })
           navigate("/") 
        } catch (error) {
            console.error("Error adding agency", error)
        }
   

        console.log(agency);
        // Clear form fields
        setAgency({
            name: '',
            address: '',
            phone: '',
            email: '',
            url: '',
            logo: '',
        })
       // Redirect to Agencies page upon successful creation
     }

  return (
    <div>
       <h3>CreateAgency</h3> 
       {/* Form to create agency */}
       <form onSubmit={handleSubmit}>
         {/* Input fields for agency details */}
            <input type ="text" name='name' placeholder = "Agency Name" onChange={handleChange} />
            <input type ="text" name='address' placeholder = "Adddress" onChange={handleChange} />
            <input type ="Number" name='phone' placeholder = "Phone" onChange={handleChange} />
            <input type ="email" name='email' placeholder = "Email" onChange={handleChange} />
            <input type ="url" name='url' placeholder = "Url"  onChange={handleChange}/>
            <input type ="url" name='logo' placeholder = "logo" onChange={handleChange} />
            <input type ="submit" />
         {/* Submit button */}
       </form>
       

        </div>
  )
}

export default CreateAgency