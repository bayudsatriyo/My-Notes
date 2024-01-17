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
    <section className="register-page bg-gradient-to-t from-purple-900 to-violet-600 w-full h-screen justify-end flex md:pr-14">
      <div className="logos w-1/3 hidden md:flex flex-col fade-in-left mr-32">
        <h1 className="font-logos text-logos text-slate-50 text-center ">N</h1>
        <p className="font-logos text-3xl text-slate-50 text-center ">
          The note-taking app that <br /> syncs with your life
        </p>
      </div>
      <div className="container md:w-1/2 w-full md:h-screen h-2/3  bg-slate-50 mx-2 my-28 md:my-0 md:mx-0 flex flex-col justify-center text-center font-myfont rounded-3xl fade-in-left">
        <h2 className="font-bold text-2xl text-violet-700">Sign Up</h2>
        <Register register={onRegister} />
        <p>
          Return to{" "}
          <Link
            to="/"
            className="text-blue-500 font-semibold hover:text-violet-700"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
