function Login(props) {

    return (
        <div>
            <h1 className="big-text">Login:</h1>
            <div>
                <input type="text" placeholder="Name" />
            </div>
            <div>
                <input type="password" placeholder="Password" />
            </div>
            <div>
                <button className="btns">Login</button>
            </div>
        </div>
    )
}
export default Login