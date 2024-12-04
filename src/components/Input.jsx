import React, { useState } from 'react'

export const Input = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [isSubmitted, setSubmitted] = useState(false);
    return (
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={(e) => {e.preventDefault(); fname && lname && setSubmitted(true);}}>
                <label htmlFor="fn">First Name:</label>
                <input type="text" id="fn" value={fname} required onChange={(e) => setFname(e.target.value)} />
                <br />
                <label htmlFor="ln">Last Name:</label>
                <input type="text" id="ln" value={lname} required onChange={(e) => setLname(e.target.value)}/>
                <br />
                <button type='submit'>Submit</button>
            </form>
            {isSubmitted && fname && lname && `Full Name: ${fname} ${lname}`}
        </div>
    )
}
