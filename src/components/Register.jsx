import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  console.log(typeof createUser);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log("ERROR:", error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-292px)] ">
      <div className="card p-8 shadow-2xl w-full max-w-lg shrink-0 space-y-2 ">
        <h2 className="text-3xl font-bold py-8"> Register</h2>
        <form onSubmit={handleRegister}>
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Email */}
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="py-4">
          Already have an account? please
          <Link className="text-blue-500 hover:underline ml-2" to={`/login`}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
