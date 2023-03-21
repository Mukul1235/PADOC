import { useState } from "react";
import Signupform from "./signupform";

const Signup = () => {
  const [Stat, setStat] = useState("patient");
  return (
    <div className="signup">
      <div className="status">
        <h1>SignUp</h1>
        <select
          className="statinput"
          name="Status"
          id="Profession"
          value={Stat}
          onChange={(e) => setStat(e.target.value)}
        >
          <option value="patient">As a Pateint</option>
          <option value="doctor">As a Doctor</option>
        </select>
      </div>
      <Signupform status={Stat} />
    </div>
  );
};

export default Signup;
