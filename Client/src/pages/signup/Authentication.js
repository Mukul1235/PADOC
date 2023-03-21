import Signup from "./signup";
import Frontpage from "./frontpage";
import Layout from "../Layout";
const Auth = () => {
  return (
    <>
    <Layout/>
    <div className="home">
      <Frontpage />
      <div className="App">
        <Signup />
      </div>
    </div>
    </>
  );
};

export default Auth;
