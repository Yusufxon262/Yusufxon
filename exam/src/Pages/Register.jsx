function Register(props) {
    return (
        <div >
            <h1 className="big-text">Register</h1>
            <div>
                <input type="text" placeholder="Name" />
            </div>
            <div>
                <input type="text" placeholder="Surname" />
            </div>
            <div>
                <input type="password" placeholder="Password" />
            </div>
            <div>
                <input type="text" placeholder="Confirm password" />
            </div>
            <div>
                <button className="btns">Login</button>
            </div>
        </div>
    )
}
export default Register