import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/frontpage/home";
import Blogs from "../pages/feedback/Blogs";
import Contact from "../pages/ContactsPage/Contact";
import NoPage from "../pages/NoPage";
import Login from "../pages/LoginPage/login";
import Auth from "../pages/signup/Authentication";
import Patient from "../pages/PatientPage/patient";
import Doctor from "../pages/DoctorPage/doctor";
import Compose from "../pages/feedback/Compose";
import Docsi from "../pages/PatientPage/DocSearch";
import Medicines from "../pages/PatientPage/medicines";
import Exercise from "../pages/PatientPage/exercise/Exercise";
import Hospitals from "../pages/PatientPage/hospital";
import CartedMedicines from "../pages/PatientPage/CartedMedicines";
import Messenger from "../pages/Chat/Messenger.js"
import BasedDoctor from "../pages/SetConversation/setConversation";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SearchDoctor from "../pages/PatientPage/SearchDoctor";
const NavbarHome = () => {
  const { user } = useContext(AuthContext);
  if (user) {
    var profile = user.profile;
  }

    localStorage.setItem("user", JSON.stringify(user));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        <Route
          path="login"
          element={
            user && profile === "Patient" ? (
              <Navigate to="/patient" />
            ) : user && profile === "Doctor" ? (
              <Navigate to="/doctor" />
            ) : (
              <Login />
            )
          }
        ></Route>
        <Route
          path="Authentication"
          element={user ? <Navigate to="/patient" /> : <Auth />}
        ></Route>
        <Route path="compose" element={<Compose />} />
        <Route
          path="patient"
          element={user && profile === "Patient" ? <Patient /> : <Auth />}
        />
        <Route
          path="doctor"
          element={user && profile === "Doctor" ? <Doctor /> : <Auth />}
        />
        <Route path="hospi" element={<Hospitals />} />
        <Route path="med" element={<Medicines />} />
        <Route path="exe" element={<Exercise />} />
        <Route path="docsi" element={<Docsi />} />
        <Route path="SearchDoctor" element={<SearchDoctor />} />
        <Route path="BasedDoctor" element={<BasedDoctor />} />
        <Route path="chat" element={user && profile == "Patient" ? <Messenger /> : user && profile === "Doctor" ? <Messenger /> : <login />} />
          <Route path="MedicineCart" element={<CartedMedicines/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavbarHome;
