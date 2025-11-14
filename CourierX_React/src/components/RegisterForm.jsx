const RegisterForm = () => {
  return (
    // register form container
    <div className="signup-form">
      {/* form title */}
      <div className="title">Become a Merchant</div>
      {/* register form */}
      <form action="#" autoComplete="off">
        {/* input container */}
        <div className="input-boxes">
          {/* name & business name input */}
          <div className="input-box">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Owner Name"
              autoComplete="off"
              required
            />
            |<i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Business Name"
              autoComplete="off"
              required
            />
          </div>

          {/* mobile no & email input */}
          <div className="input-box">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Mobile No"
              autoComplete="off"
              required
            />
            |<i className="fas fa-envelope"></i>
            <input
              type="text"
              placeholder="Email"
              autoComplete="off"
              required
            />
          </div>

          {/* business name input */}
          <div className="input-box">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Address (Your Pickup Location)"
              autoComplete="off"
              required
            />
          </div>
          {/* password & confirm input */}
          <div className="input-box">
            <i className="fas fa-lock"></i>
            <input
              type="Password"
              placeholder="Password"
              autoComplete="off"
              required
            />
            |<i className="fas fa-lock"></i>
            <input
              type="Password"
              placeholder="Confirm Password"
              autoComplete="off"
              required
            />
          </div>

          {/* submit button */}
          <div className="button input-box">
            <input type="submit" value="Sumbit" />
          </div>
          {/* switch to login */}

          <div className="text sign-up-text">
            Already have an account?
            <label htmlFor="flip"> Login now</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
