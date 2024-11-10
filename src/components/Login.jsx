import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-292px)] ">
      <div className="card p-8 shadow-2xl w-full max-w-lg shrink-0 space-y-2 ">
        <h2 className="text-3xl font-bold py-8"> Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="py-4">
          New to this website? please
          <Link className="text-blue-500 hover:underline ml-2" to={`/register`}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
