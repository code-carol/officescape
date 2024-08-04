import Navbar from "../../components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <h2>Get started</h2>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <label>Confirm Password</label>
        <input type="password" />
      </form>
    </>
  );
};

export default Register;
