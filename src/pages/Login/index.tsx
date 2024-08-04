import Navbar from "../../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <h2>Get started</h2>
      <form>
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
      </form>
    </>
  );
};

export default Login;
