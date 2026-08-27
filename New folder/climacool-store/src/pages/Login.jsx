import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate()

  const handlelogin = (e) => {
    e.preventDefault();
    login(useremail, password);

    navigate("/")
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 py-16">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-10">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-xl font-black text-white">
              C<span className="text-red-500">L</span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              Welcome Back
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-tight text-gray-900">
              Login to your account
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Sign in to continue shopping your favorite footwear.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handlelogin} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                value={useremail}
                onChange={(e) => setUseremail(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <a
                  href="#"
                  className="text-xs font-semibold text-red-600 hover:text-red-700"
                >
                  Forgot password?
                </a>
              </div>

              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-gray-800 active:scale-[0.98]"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-medium text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Register */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-red-600 transition hover:text-red-700"
            >
              Create one
            </Link>
          </p>
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Step into style. Find your perfect pair.
        </p>
      </div>
    </main>
  );
};

export default Login;
