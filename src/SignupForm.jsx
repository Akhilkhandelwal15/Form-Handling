import { useState } from "react";

export default function(){
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    function handleInputChange(event){
        const {name, value} = event.target;
        setFormData((prev)=>({...prev, [name]: value}));
    }

    function handleFormSubmit(event){
        event.preventDefault();
        if(validateForm()){
            console.log(formData);
        }
        else{
            console.log("Form is not validated");
        }
    }

    function validateForm(){
        const newErrors = {};
        if(!formData.firstname.trim()) newErrors.firstname = "First name is required";
        if(!formData.lastname.trim()) newErrors.lastname = "Last name is required";
        if(!formData.email.trim()) newErrors.email = "Email is required";
        if(!formData.password.trim()) newErrors.password ="Password is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    return (
        <div className="main-container">
            <h1>SignUp</h1>
            <div className="form-container">            
                <form>
                    <div className="input-wrapper">
                        <input type="text" 
                            name = "firstname"
                            value = {formData.firstname}
                            onChange = {handleInputChange}
                            placeholder="Enter first name"
                        />
                        <p className="error">{errors.firstname}</p>
                    </div>
                    <div className="input-wrapper">
                        <input type="text"
                            name = "lastname"
                            value = {formData.lastname}
                            onChange = {handleInputChange}
                            placeholder="Enter last name"
                        />
                        <p className="error">{errors.lastname}</p>
                    </div>
                    <div className="input-wrapper">
                        <input type="email"
                            name = "email"
                            value = {formData.email}
                            onChange = {handleInputChange}
                            placeholder="Enter email"
                        />
                        <p className="error">{errors.email}</p>
                    </div>
                    <div className="input-wrapper">
                        <input type="password"
                            name = "password"
                            value = {formData.password}
                            onChange = {handleInputChange}
                            placeholder="Enter password"
                        />
                        <p className="error">{errors.password}</p>
                    </div>
                    <button type="submit" onClick={handleFormSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
}