import { Fragment } from "react";
import { Outlet } from "react-router-dom";
const Navigation =()=>{
    return (
    <Fragment>

  <h1>I am the Navigation bar</h1>
  </div>
  <Outlet/>
    </Fragment>
    )
  }


  export default Navigation;