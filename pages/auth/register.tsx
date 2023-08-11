import Head from "next/head";
import RegisterForm from "../../components/routes/auth/register/Register";

function Register() {
  return (
    <>
      <Head>
        <title>Create an Account</title>
        <meta
          name="description"
          content="Register your Genzaar account."
        />
        <meta
          name="keywords"
          content="Financial management, Personal finance, Budgeting, Saving goals, Investment decisions, Money management, Financial tools, Young adults, Financial tracking, Money-saving strategies"
        />
      </Head>
      <RegisterForm />
    </>
  );
}

export default Register;
