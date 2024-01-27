import React, { Component } from "react";;

class Login extends Component {
    render() {
        return (
            <form>
                <div>
                    <p style={{color: "green"}}>Login</p>
                    <input />
                </div>
                <div>
                    <p style={{color: "green"}}>Password</p>
                    <input />
                </div>
                <div style={{marginTop: "10px"}}>
                    <button style={{
                        color: "green", 
                        padding: "5px", 
                        border: "1px solid grey", 
                        borderRadius: "3px", 
                        fontSize: "16px", 
                        fontWeight: "bold",
                        cursor: "pointer",
                        }}>
                        Sign in
                    </button>
                </div>
            </form>
        )
    }
}

export default Login;
