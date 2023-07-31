import React from "react";
import "./_sidebar.scss";
import { log_out } from "../../Redux/actions/auth.action";
import{
  
  MdExitToApp,
  MdThumbUp,
 
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
// import { isDOMComponent } from "react-dom/test-utils";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = ({sidebar,handleToggleSidebar}) => {
  const dispatch=useDispatch();
  const logoutHandler=()=>{
     dispatch(log_out());
  }
  
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <Link to='/'>
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>

      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>
     
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I don't know</span>
      </li>
      <hr />
      <li onClick={logoutHandler}>
        <MdExitToApp size={23} />
        <span>Logout</span>
      </li>
      <hr />
    </nav>
  );

};
export default Sidebar;
