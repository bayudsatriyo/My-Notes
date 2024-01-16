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
    <section className="register-page bg-gradient-to-t from-purple-900 to-violet-600 w-full h-screen justify-end flex pr-20">
      <div className="container w-1/2 bg-slate-50 flex flex-col justify-center text-center font-myfont rounded-2xl fade-in-left">
        <h2 className="font-semibold text-xl">
          Gak perlu serius-serius ya isinya ...
        </h2>
        <Register register={onRegister} />
        <p>
          Kembali ke{" "}
          <Link to="/" className="text-blue-500 font-semibold">
            Masuk
          </Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
