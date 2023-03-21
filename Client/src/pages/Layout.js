import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className='main'>
          <li id='main'>
            <Link to="/">Home</Link>
          </li>
          <li id='main'>
            <Link to="/blogs">Feedback</Link>
          </li>
          <li id='main'>
            <Link to="/contact">Contact</Link>
          </li>
          <li id='main'>
            <Link to='/Authentication'>LogIn/SignUp</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
