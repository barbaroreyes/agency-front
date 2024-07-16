import {useState} from 'react';
import axios from 'axios';
const CreateAgency = () =>{
    const baseUrl = "https://project-agency-six.vercel.app/";
    const [agency, setAgency] = useState({
        agencyname: '',
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
            await axios.post(`${baseUrl}/api/agency`)
            .then(response => {
                console.log(response);
                alert("Agency Created Successfully");
            })
            
        } catch (error) {
            console.error("Error adding agency", error)
        }
   


        // Validate form inputs before submission
        // Implement validation logic
        // Display error messages if form inputs are invalid
        // Implement logic to sanitize inputs
        // Implement logic to encrypt sensitive data (phone, email, etc.)
        // Implement logic to validate form inputs against existing data in the database (agency name, email, etc.)
        // Implement logic to upload logo file and store it in a secure location
        // Implement logic to resize logo image to a reasonable size
        // Implement logic to generate a unique agency ID
        // Implement logic to generate a unique logo URL
        // Implement logic to generate a unique email verification token
        // Implement logic to send email verification link to the agency's email address
        // Implement logic to send password reset link to the agency's email address
        // Implement logic to send contact us email to the system administrator
        // Implement logic to send privacy policy email to the system administrator
        // Implement logic to send terms and conditions email to the system administrator
        // Implement logic to send welcome email to the agency upon successful registration
        // Implement logic to create agency in database
        console.log(agency);
        // Clear form fields
        setAgency({
            agencyname: '',
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
            <input type ="text" name='agencyname' placeholder = "Agency Name" onChange={handleChange} />
            <input type ="text" name='adddress' placeholder = "Adddress" onChange={handleChange} />
            <input type ="Number" name='phone' placeholder = "Phone" onChange={handleChange} />
            <input type ="email" name='email' placeholder = "Email" onChange={handleChange} />
            <input type ="url" name='url' placeholder = "Url"  onChange={handleChange}/>
            <input type ="text" name='logo' placeholder = "logo" onChange={handleChange} />
            <input type ="submit" />
         {/* Submit button */}
       </form>
       {/* Input fields for agency details */}
       {/* Submit button */}
       {/* Redirect to Agencies page upon successful creation */}
       {/* Error message if form submission fails */}
       {/* Link to Agencies page */}
       {/* Link to Login page */}
       {/* Link to Signup page */}
       {/* Link to Forgot Password page */}
       {/* Link to Contact Us page */}
       {/* Link to Privacy Policy page */}
       {/* Link to Terms of Service page */}
       {/* Link to FAQ page */}
       {/* Link to Blog page */}
       {/* Link to About Us page */}
       {/* Link to Careers page */}
       {/* Link to Support page */}
       {/* Link to Donate page */}
       {/* Link to Advertise page */}
       {/* Link to Social Media icons */}
       {/* Link to Language Selection dropdown */}
       {/* Link to Currency Selection dropdown */}
       {/* Link to Privacy Policy page */}

        </div>
  )
}

export default CreateAgency