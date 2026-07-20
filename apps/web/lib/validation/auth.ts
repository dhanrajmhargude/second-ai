import {z} from "zod" ;

export const signupSchema = z.object({
    fullName: z.string().min(3, "Full name must be at least 3 characters").max(100, "Full name is too long"),
    
    email:z.email("Invalid email address"),
    
    password :z.string().min(8,"passowrd must be atleast 8 character ").regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
    
    confirmPassword:z.string()
})
.refine((data)=> data.password === data.confirmPassword,{
    message: "Password doesn't Match ",
    path:["confirmPassword"]
})

export const signinSchema = z.object({
    email : z.email(),
    password :z.string().min(8,"passowrd must be atleast 8 character ").regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
})
