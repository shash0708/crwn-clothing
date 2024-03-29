import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
const Navigation =()=>{
    return (
    <Fragment>
  <div className="navigation">
  <div>Logo</div>
  <div className="links-container">
     <Link className="link">
     
     </Link>
  </div>
  </div>
  <Outlet/>
    </Fragment>
    )
  }


  export default Navigation;