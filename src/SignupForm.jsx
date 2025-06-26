import { useState } from "react";

export default function(){
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    function handleInputChange(event){
        const {name, value} = event.target;
        setFormData((prev)=>({...prev, [name]: value}));
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(formData);
    }
    return (
        <div className="main-container">
            <h1>SignUp</h1>
            <div className="form-container">            
                <form>
                    <input type="text" 
                        name = "firstname"
                        value = {formData.firstname}
                        onChange = {handleInputChange}
                        placeholder="Enter first name"
                    />
                    <input type="text" 
                        name = "lastname"
                        value = {formData.lastname}
                        onChange = {handleInputChange}
                        placeholder="Enter last name"
                    />
                    <input type="email" 
                        name = "email"
                        value = {formData.email}
                        onChange = {handleInputChange}
                        placeholder="Enter email"
                    />
                    <input type="password" 
                        name = "password"
                        value = {formData.password}
                        onChange = {handleInputChange}
                        placeholder="Enter password"
                    />
                    <button type="submit" onClick={handleFormSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
}