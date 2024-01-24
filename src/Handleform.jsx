import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const Handleform = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("name:" + name);
        console.log("age:" + age);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <div className="mb-2">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" onChange={handleNameChange} />
            </div>
            <div className="mb-2">
                <label htmlFor="" className="form-label">Age</label>
                <input type="number" className="form-control" onChange={handleAgeChange} />
            </div>
            <button type='submit' className='btn btn-primary'>Register</button>
        </form>
    )
}

export default Handleform
