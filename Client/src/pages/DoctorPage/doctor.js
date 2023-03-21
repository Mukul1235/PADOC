import { useState } from "react";
import Layout from "../Layout";

const Doctor = () => {
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <Layout/>
      <h1>Hello I am Doctor !</h1>
    </div>
  );
};

export default Doctor;
