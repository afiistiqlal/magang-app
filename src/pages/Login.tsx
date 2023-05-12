import Head from "next/head";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <Head><title>Login</title></Head>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">Login</h1>
      </div>
    </>
  );
};

export default Login;
