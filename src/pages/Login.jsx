import '../assets/styles/Form.css';


function Login() {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>New here? <a href="/register">Create an account</a></p>
    </div>
  );
}

export default Login;
