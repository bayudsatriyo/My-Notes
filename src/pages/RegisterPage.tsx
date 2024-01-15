import { Link, useNavigate } from "react-router-dom";
import Register, { AuthState } from "../components/Registrasi";
import { register } from "../utils/api";

function RegisterPage() {
  const navigate = useNavigate();
  async function onRegister(user: AuthState) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>Gak perlu serius-serius ya isinya ...</h2>
      <Register register={onRegister} />
      <p>
        Kembali ke <Link to="/">Masuk</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
