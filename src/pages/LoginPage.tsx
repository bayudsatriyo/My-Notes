import { Link } from "react-router-dom";
import Login from "../components/Login";
import { login } from "../utils/api";

function LoginPage({
  loginSuccess,
}: {
  loginSuccess: (accessToken: string) => void;
}) {
  async function onLogin(email: string, password: string) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>Silakan masuk untuk melanjutkan ...</h2>
      <Login login={onLogin} />
      <p>
        Belum punya akun? <Link to="/register">Daftar di sini.</Link>
      </p>
    </section>
  );
}

export default LoginPage;
