import react from 'react';

export default function Register() { 
    return (
        <form action="/user" method="post">
            <h1>Register</h1>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" />
            </div>
            <button type="submit">Register</button>
        </form>
    )
}