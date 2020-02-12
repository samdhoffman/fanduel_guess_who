import React from "react"
import "./Layout.scss";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div className="Layout">
      <Navbar />
      <div className="content">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
