import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Handlecontactform = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
    function handleFormSubmit(e) {
        e.preventDefault()
        console.log("name:" + name);
        console.log("email:" + email);
        console.log("message:" + message);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <div className="mb-2">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" onChange={handleNameChange}/>
            </div>
            <div className="mb-2">
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" className="form-control" onChange={handleEmailChange}/>
            </div>
            <div className="mb-2">
                <label htmlFor="" className="form-label">Message</label>
                <textarea className="form-control" onChange={handleMessageChange}> </textarea>
            </div>
            <button type="submit" className="btn btn-secondary">Send Message</button>
        </form>
    )
}

export default Handlecontactform;
