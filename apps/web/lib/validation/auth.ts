import {z} from "zod" ;

export const signupSchema = z.object({
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
