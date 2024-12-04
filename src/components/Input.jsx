import React, { useState } from 'react'

export const Input = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [isSubmitted, setSubmitted] = useState(false);
    return (
        <div>
            <h1>Full Name Display</h1>
            <form action="">
                <label htmlFor="fn">First Name:</label>
                <input type="text" id="fn" required onChange={(e) => setFname(e.target.value)} />
                <br />
                <label htmlFor="ln">Last Name:</label>
                <input type="text" id="ln" required onChange={(e) => setLname(e.target.value)}/>
                <br />
                <button onClick={(e) => {fname && lname && setSubmitted(true); e.preventDefault()}}>Submit</button>
            </form>
            {isSubmitted && fname && lname && `Full Name: ${fname} ${lname}`}
        </div>
    )
}
