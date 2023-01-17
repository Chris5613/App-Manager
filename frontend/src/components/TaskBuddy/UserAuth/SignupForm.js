import React, { useState } from "react";

const SignupForm = () => {
    const [userName, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    setUser("");
    setPass("");
};

return (
    <form className="forms" nSubmit={handleSubmit}>
        <div className="form-control">
            <label>Username</label>
            <input
                required
                onChange={(e) => setUser(e.target.value)}
                type="text"
                placeholder="Enter Username..."
                value={userName}
            />
        </div>
        <div className="form-control">
            <label>Password</label>
            <input
            required
            onChange={(e) => setPass(e.target.value)}
            type="text"
            placeholder="Enter Password..."
            value={pass}
            />
        </div>
        <div className="center">
            <input type="submit" value="Confirm" id="submit-btn" />
        </div>
    </form>
);
};

export default SignupForm;
