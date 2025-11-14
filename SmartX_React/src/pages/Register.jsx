import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <section className="auth section" style={{ marginTop: "80px" }}>
      <div
        className="main__wrapper"
        style={{ display: "grid", placeItems: "center" }}
      >
        <div className="auth_container">
          <input defaultChecked type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img src="/auth-ecourier.svg" alt="" />
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <LoginForm />
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
