'use server'
import { redirect } from 'next/navigation.js';
import db from '../config/db.js'
export const contactAction=async(previousState,formData)=>{
    try {
         const {fullname,email,message}=Object.fromEntries(formData.entries())
         console.log(fullname,email,message);
         
    await db.execute(`INSERT INTO contact_form (fullname,email,message) VALUES(?,?,?)`,[fullname,email,message])
        return {success:true,message:"submit Form"}
        // redirect("/")
    } catch (error) {
        if(error.message=='NEXT_REDIRECT') throw error
        return {success:false,message:"Failed submit Form"}
    }
   
}