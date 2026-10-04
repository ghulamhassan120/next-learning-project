'use server'
import db from '../config/db.js'
export const contactAction=async(formData)=>{
    const {fullname,email,message}=Object.fromEntries(formData.entries())
    console.log(fullname,email,message);
    await db.execute(`INSERT INTO contact_form (fullname,email,message) VALUES(?,?,?)`,[fullname,email,message])
    
}