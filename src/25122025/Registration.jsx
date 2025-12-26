import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './addstyles.css';
function Registration(){
  const navigate=useNavigate();
   const[form,setform]=useState({
    firstName:"",
    lastName:"",
    age:"",
    phone:"",
    altPhone:"",
    college:"",
    degree:"",
    branch:"",
    cgpa:"",
    collegeAddress:"",
    professional:"no",
    company:"",
    role:"",
    companyAddress:""
   });
   const[emails,setemails]=useState([""]);
   const[errors,seterrors]=useState([]);
   const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value});
   };
   const handleEmailChange=(index,value)=>{
    const update=[...emails];
    update[index]=value;
    setemails(update);
   };
   const addEmail=()=>setemails([...emails,""]);
   const deleteEmail=(index)=>
        setemails(emails.filter((_,i)=>i!==index));
  const handleSubmit=(e)=>{
    e.preventDefault();
    let missing=[];
    if(!form.firstName) missing.push("First Name");
    if (!form.lastName) missing.push("Last Name");
    if (!form.age) missing.push("Age");
    if (!form.phone) missing.push("Phone");
     else if (!/^\d+$/.test(form.phone)) {
    missing.push("Phone number must contain digits only");
  } else if (form.phone.length !== 10) {
    missing.push("Phone number must be exactly 10 digits");
  }
    if (!form.college) missing.push("College");
    if (!form.degree) missing.push("Degree");
    if (!form.branch) missing.push("Branch");
    if (!form.cgpa) missing.push("CGPA");
    if (!form.collegeAddress) missing.push("College Address");
   if (form.professional === "yes") {
      if (!form.company) missing.push("Company Name");
      if (!form.role) missing.push("Role");
      if (!form.companyAddress) missing.push("Company Address");
    }
    const validemails=emails.filter((e)=>e);
    if(validemails.length===0) missing.push("Email");
    validemails.forEach((email)=>{
      if(!emailRegex.test(email))
            missing.push(`Invalid Email:${email}`);
    });
    if(missing.length>0){
       seterrors(missing);
      return;
    }
  navigate("/Success");
};
return(
<div className="page">
  <form className="form" onSubmit={handleSubmit}>
    <h1 className="heading">Registration Form</h1>
    <h2>Personal Details</h2>
    <div className="field">
    <label>First Name</label>
    <input name="firstName" placeholder="First Name" onChange={handleChange}/>
    </div>
    <div className="field">
     <label>Last Name</label>
     <input name="lastName" placeholder="Last Name" onChange={handleChange}/><br/>
     </div>
     <div className="field">
     <label>Age</label>
     <input name="age" placeholder="Age" onChange={handleChange}/><br/>
     </div>
     <div className="field">
     <label>Phone</label>
     <input name="phone" placeholder="Phone" onChange={handleChange} inputMode="numeric"  maxLength={10}   /><br/>
     </div>
     <div className="field">
     <label>Alt Phone</label>
     <input name="altPhone" placeholder="AltPhone" onChange={handleChange} inputMode="numeric"  maxLength={10}/><br/>
     </div>
     <div className="field">
     <label>Email Address</label>
     <div className="emailContainer">
  {emails.map((email,i)=>(
    <div className="emailRow"key={i}>
      <input value={email}  placeholder="Email" onChange={(e=>handleEmailChange(i,e.target.value))}/>
      {i>0 && (<button className="deleteBtn" type="button" onClick={()=>deleteEmail(i)}>Delete</button>)}
    </div>
  ))}
  <button className="addBtn" type="button"  onClick={addEmail}>Add Email</button>
  </div>
  </div>
  <h2>Educational Details</h2>
   <div className="field">
   <label>College Name</label>
   <input name="college" placeholder="College Name" onChange={handleChange}/><br/>
   </div>
    <div className="field">
    <label>Degree</label>
    <input name="degree" placeholder="Degree" onChange={handleChange}/><br/>
    </div>
     <div className="field">
     <label>Branch</label>
     <input name="branch" placeholder="Branch" onChange={handleChange}/><br/>
     </div>
      <div className="field">
      <label>cgpa</label>
      <input name="cgpa" placeholder="cgpa" onChange={handleChange}/><br/>
      </div>
       <div className="field">
       <label>College Address</label>
       <input name="collegeAddress" placeholder="College Address" onChange={handleChange}/><br/>
       </div>
       <div className="radio">
       <label>Are you a professional worker?</label>
       <label>
        <input type="radio" name="professional" value="yes" checked={form.professional==="yes"} onChange={handleChange}/><br/>
        Yes
       </label>
        <label>
        <input type="radio" name="professional" value="no" checked={form.professional==="no"} onChange={handleChange}/><br/>
        No
       </label>
       </div>
       {form.professional==="yes" && (
        <>
        <div className="field">
         <label>Company Name</label>
         <input name="company" placeholder="Company Name" onChange={handleChange} /><br/>
         </div>
         <div className="field">
          <label>Role</label>
          <input name="role" placeholder="Role" onChange={handleChange} /><br/>
          </div>
          <div className="field">
           <label>Company Address</label>
           <input name="companyAddress" placeholder="Company Address" onChange={handleChange} /><br/>
           </div>
        </>
       ) }
       <br/>
       <button className="submitBtn" type="submit">Submit</button>
       {errors.length>0 &&(
        <div className="errorBox" style={{color:"red"}}>
          <h4>Missing or Invalid Fields:</h4>
          <ul>
            {errors.map((e,i)=>(
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
       )}
  </form>
  </div>
);
}
export default Registration;
