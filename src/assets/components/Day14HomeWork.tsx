import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = ((e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Something went wrong");
                }
                return res.json();
            })
            .then(() => {
                toast.success("Data Saved Successfully!");
                setName("");
                setEmail("");
                setPassword("");
            })
            .catch(() => {
                toast.error("Failed to save data");
            })
            .finally(() => {
                setLoading(false);
            });
    })
    // if(loading) return <h1>Loading.........</h1>
    return (
        <>
            <div className="card col-md-8">
                <div className="card-header">
                    <h3 className="card-title">Register New User</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-3">
                                <label>Username</label>
                                <input
                                    className="form-control form-control-sm"
                                    type="text"
                                    placeholder="Username"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-md-3">
                                <label>Email</label>
                                <input
                                    className="form-control form-control-sm"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-md-3">
                                <label>Password</label>
                                <input
                                    className="form-control form-control-sm"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="col-md-3 mt-4">
                                <button
                                    className="btn btn-sm btn-outline-success"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? "Saving..." : "Save"}
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
export default RegisterForm;