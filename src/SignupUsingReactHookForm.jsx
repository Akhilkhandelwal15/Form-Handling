import { useForm } from "react-hook-form"


export default function SignupUsingReactHookForm(){

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting},
    } = useForm()

    const password = watch("password");
    
    async function onSubmit(data){
        await new Promise((resolve)=> setTimeout(resolve, 5000)); // it will wait for 5 seconds then call resolve to continue
        console.log(data);
    }

    return (
        <div className="main-container">
            <h1>SignUp</h1>
            <div className="form-container">            
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-wrapper">
                        <input type="text" 
                            placeholder="Enter first name"
                            {...register("firstname",
                                { required: { value: true, message: "Firstname is required." } }
                            )}
                        />
                        <p className="error">{errors.firstname && errors.firstname.message}</p>
                    </div>
                    <div className="input-wrapper">
                        <input type="text"
                            placeholder="Enter last name"
                            {...register("lastname")}
                        />
                        <p className="error">{errors.lastname && errors.lastname.message}</p>
                    </div>
                    <div className="input-wrapper">
                        <input type="text"
                            placeholder="Enter email"
                            {...register("email",
                                { 
                                    required: { value: true, message: "Email is required." },
                                    pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid Email Address"},
                                }
                            )}
                        />
                        <p className="error">{errors.email && errors.email.message}</p>
                    </div>
                    <div className="input-wrapper">
                        <input type="password"
                            placeholder="Enter password"
                            {...register("password", 
                                {
                                    required: {value:true, message:'Password is required'},
                                    minLength: {value: 6, message:"Password should be atleast 6 char long"},
                                    maxLength:  {value: 12, message:"Password cannot be more than 12 chars"}
                                },                               
                            )}
                        />
                        <p className="error">{errors.password && errors.password.message}</p>
                    </div>
                    <div className="input-wrapper">
                        <input type="password"
                            placeholder="Confirm password"
                            {...register("confirmPassword", 
                                {
                                    required: {value:true, message:'Password is required'},
                                    validate: (value)=> value===password || "Password does not match",
                                },                               
                            )}
                        />
                        <p className="error">{errors.confirmPassword && errors.confirmPassword.message}</p>
                    </div>
                    <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
                </form>
            </div>
        </div>
    );
}