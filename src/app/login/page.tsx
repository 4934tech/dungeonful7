'use client';

import {useState} from "react";
import {useRouter} from "next/router";

const Login = () => {
    const [name, setName] = useState<string>("");
    const router = useRouter();

    const handleLogin = () => {
        if (name) {
            localStorage.setItem("username", name);
            router.push("/");
        }
    };

    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h1>Enter Your Name</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
            />
            <button onClick={handleLogin}>Join Game</button>
        </div>
    );
};

export default Login;
