/*
  - componet login form - auth page
*/

const LoginForm = () => {
  return (
    // login form container
    <div className="login-form">
      {/* form title */}
      <div className="title">Login</div>
      {/* login form */}
      <form action="#" autoComplete="nope">
        {/*  input container */}
        <div className="input-boxes">
          {/* email inpur */}
          <div className="input-box">
            <i className="fas fa-envelope"></i>
            <input type="text" placeholder="Enter your email" required />
          </div>
          {/* password input */}
          <div className="input-box">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              required
            />
          </div>
          {/* forgot password */}
          <div className="text">
            <a href="#">Forgot password?</a>
          </div>
          {/* form submit */}
          <div className="button input-box">
            <input type="submit" value="Sumbit" />
          </div>
          <div className="text sign-up-text">
            Don't have an account? <label htmlFor="flip">Register now</label>
          </div>
        </div>
        {/* end input container */}
      </form>
      {/* end login form */}
    </div>
    // end login form container
  );
};

export default LoginForm;
