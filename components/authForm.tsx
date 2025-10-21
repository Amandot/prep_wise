"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"



import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { toast } from "sonner"
import FormFeild from "./FormFeild"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})


const authFormSchema =(type:FormType )=>{
  return z.object({
    name: type === 'Sign-up' ? z.string().min(3) : z.string().optional(),
    email:z.string().email(),
    password :z.string().min(3),
  })
}



const authForm = ({type}:{ type:FormType}) => {


      const router = useRouter()
      const formSchema = authFormSchema(type)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email:"",
          password:"",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
      
          try{

            if(type =='sign-up'){
              // console.log('SIGN Up', values);
              toast.success('Account created successfully. Please Sign In')
              router.push('/Sign-in')
            }
            else{
              toast.success('Sign-In Successfully') 
              router.push('/dashboard')           
            }

          }
          catch(error){
            console.log(error)
            toast.error(`There was an error: ${error}`)
          }

      }

      const isSignIn =type ==='sign-in'


  return (
      <div className="card-border lg:min-w[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10  ">
      <div className=" flex flex-row gap-2 justify-center">

        <img src="/logo.svg" alt="logo" height={32} width={38} />

        <h2 className="text-primary-100 ">
          PrepWise
        </h2>
      </div>

          <h3>Practise job interview with ai  </h3>
      
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full mt-4 form  ">
        {!isSignIn  && (
          <FormFeild control={form.control}
           name="name" 
           label="Name"
           placeholder="Your Name"
           />
        )}
        {/* <p>Email</p> */}
        <FormFeild 
        control={form.control}
        name="email"
        label="Email"
        placeholder="Your email address"
        type="email"
        />
        {/* <p>Password</p> */}
        <FormFeild 
        control={form.control}
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        />
  
          <Button className="btn " type="submit">{isSignIn ? 'Sign in': 'Create an Account'}</Button>
        </form>
      </Form>

        <p className="text-center">{ isSignIn ? 'NO account Yet?' : 'Have an account already ?'}
          <Link href={!isSignIn?'/Sign-in' : '/Sign-up'} className="font-bold text-user-primary ml-1">
          {!isSignIn ? "Sign in ": "Sign up"} 
          </Link>
            </p>
      </div>
      </div>
  )
}

export default authForm
