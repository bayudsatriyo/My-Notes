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
    <section className="login-page bg-gradient-to-t from-purple-900 to-violet-600 w-full pl-20">
      <div className="container mx-auto font-myfont inline-block">
        <div className="logindiv container w-1/2 bg-slate-50 text-center py-20 h-screen rounded-2xl fade-in-right justify-center flex flex-col">
          <h1 className="font-bold text-2xl py-3">Hallo, 👋</h1>
          <h2 className="font-bold text-2xl pt-3 pb-5">
            Welcome to My Note App
          </h2>
          <Login login={onLogin} />
          <p className="py-4">
            Belum punya akun?{" "}
            <Link to="/register" className="text-blue-700 font-semibold">
              Daftar di sini.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
