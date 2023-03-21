import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";

const Signupform = (props) => {
  const stat = props.status;
  const navigate = useNavigate();

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const cpassword = useRef();
  const speciality = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if (cpassword.current.value !== password.current.value) {
      password.current.setCustomValidity("Password dont match");
    }
    else {
      // console.log(speciality.current.value);
      const user = {
        name: name.current.value,
        password: password.current.value,
        email: email.current.value,
        // speciality: speciality.current.value,
      };
      try {
        if (stat === "doctor") {
          await axios.post("/register/doctor", user);
          navigate("/login");
        }
        else {
          await axios.post("/register/patient", user);
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
   
  });

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setUser((values) => ({ ...values, [name]: value }));
  //   console.log(user);
  // };

  // const navigate = useNavigate();

  // const doctor =async (e) => {
  //       e.preventDefault();
  //   const { name, email, password, cpassword } = user;
  //   const res = await fetch("/register/doctor", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       password,
  //       cpassword,
  //     }),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //       if (res.status === 201) {
  //         window.alert("Registration success");
  //         console.log("Registration success");
  //         navigate("/doctor");
  //       } else {
  //         window.alert(data.error);
  //         console.log("Registration failed");
  //       }
  // };
  // const patient = async (e) => {
  //   e.preventDefault();
  //   const { name, email, password, cpassword } = user;

  //   const res = await fetch("/register/patient", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       password,
  //       cpassword,
  //     }),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   if (res.status === 201) {

  //           window.alert("Registration success");
  //           console.log("Registration success");
  //           navigate("/patient");
  //   } else {
  //          window.alert(data.error);
  //          console.log("Registration failed");
  //   }
  // };

  if (stat === "doctor") {
    return (
      <form method="post" onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Doctor's Name"
          ref={name}
          name="name"
        ></input>
        <input
          type="email"
          placeholder="Email"
          required
          ref={email}
          name="email"
        />
        <input
          type="password"
          placeholder="Create Password"
          required
          minLength="6"
          ref={password}
          name="password"
        ></input>
        <input
          type="password"
          placeholder="Confirm Password"
          ref={cpassword}
          name="cpassword"
        ></input>
        <input
          type="text"
          placeholder="Spaciality"
          ref={speciality}
          name="speciality"
        ></input>
        <div>
          <h5 style={{ marginTop: 15 }}>Please Upload Your Degree</h5>
          <input type="file"></input>
        </div>
        <div>
          <Link to="/login">Already Registered ?</Link>
        </div>
        <button type="submit" id="signup">
          {" "}
          Signup
        </button>
      </form>
    );
  } else
    return (
      <form onSubmit={handleClick}>
        <input
          type="text"
          ref={name}
          placeholder="Patient's Name"
          name="name"
        ></input>
        <input type="email" placeholder="Email" ref={email} name="email" />
        <input
          type="password"
          placeholder="Create Password"
          minLength="6"
          name="password"
          ref={password}
        ></input>
        <input
          type="password"
          ref={cpassword}
          placeholder="Confirm Password"
          name="cpassword"
        ></input>
        <div style={{ marginTop: 15 }}>
          <Link to="/login">Already Registered ?</Link>
        </div>
        <button type="submit" id="signup">
          Signup
        </button>
      </form>
    );
};

export default Signupform;