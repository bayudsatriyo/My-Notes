import { Link } from "react-router-dom";
import Login from "../components/Login";
import { login } from "../utils/api";

interface outputLogin {
  error: boolean;
  data: { accessToken: string };
}

function LoginPage({
  loginSuccess,
}: {
  loginSuccess: ({ accessToken }: { accessToken: string }) => void;
}) {
  async function onLogin(email: string, password: string) {
    const { error, data }: outputLogin = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page bg-gradient-to-t from-purple-900 to-violet-600 w-full h-screen flex">
      <div className="container md:pl-14 font-myfont h-full inline-block w-full md:w-1/2 px-2">
        <div className="logindiv container w-full md:w-10/12 bg-slate-50 text-center my-28 md:my-0 md:py-20 h-2/3 md:h-screen rounded-3xl fade-in-right justify-center flex flex-col">
          <h1 className="font-bold text-2xl py-3">Hallo, 👋</h1>
          <h2 className="font-bold text-2xl pt-3 pb-5">
            Welcome to My Note App
          </h2>
          <Login login={onLogin} />
          <p className="py-4">
            Don't have an account yet?{" "}
            <Link
              to="/register"
              className="text-blue-700 font-semibold hover:text-violet-800"
            >
              Register here.
            </Link>
          </p>
        </div>
      </div>
      <div className="logos w-1/3 hidden md:flex flex-col fade-in-right ml-10">
        <h1 className="font-logos text-logos text-slate-50 text-center ">N</h1>
        <p className="font-logos text-3xl text-slate-50 text-center ">
          The note-taking app that <br /> syncs with your life
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
