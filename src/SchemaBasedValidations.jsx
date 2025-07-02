import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form"

const validatoinSchema = Yup.object({
    firstname: Yup.string().trim().required("Firstname is required"),
    lastname: Yup.string().trim().required("Lastname is required"),
    email: Yup.string().trim().required("Email is required").email("Enter a valid email address"),
    password: Yup.string().trim().required("Password is required").min(6, "Password must be at least 6 characters").max(12, "Password cannot exceed 12 characters"),
    confirmPassword: Yup.string().required("Please confirm your password").oneOf([Yup.ref("password")], "Passwords must match"),
});

export default function SchemaBasedValidation(){
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting},
    } = useForm({
        resolver: yupResolver(validatoinSchema),
    });

    async function onSubmit(data){
        await new Promise((resolve)=> setTimeout(resolve, 5000));
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
                            {...register("firstname")}
                        />
                        <p className="error">{errors.firstname?.message}</p>
                    </div>
                    <div className="input-wrapper">
                        <input type="text"
                            placeholder="Enter last name"
                            {...register("lastname")}
                        />
                        <p className="error">{errors.lastname?.message}</p>
                    </div>
                    <div className="input-wrapper">
                        <input type="text"
                            placeholder="Enter email"
                            {...register("email")}
                        />
                        <p className="error">{errors.email?.message}</p>
                    </div>
                    <div className="input-wrapper">
                        <input type="password"
                            placeholder="Enter password"
                            {...register("password")}
                        />
                        <p className="error">{errors.password?.message}</p>
                    </div>
                    <div className="input-wrapper">
                        <input type="password"
                            placeholder="Confirm password"
                            {...register("confirmPassword")}
                        />
                        <p className="error">{errors.confirmPassword?.message}</p>
                    </div>
                    <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
                </form>
            </div>
        </div>
    );
}