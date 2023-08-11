import Head from "next/head";
import LoginForm from "../../components/routes/auth/login/Login";

function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Login to your Genzaar account."
        />
        <meta
          name="keywords"
          content="Financial management, Personal finance, Budgeting, Saving goals, Investment decisions, Money management, Financial tools, Young adults, Financial tracking, Money-saving strategies"
        />
      </Head>
      <LoginForm />
    </>
  );
}

export default Login;
