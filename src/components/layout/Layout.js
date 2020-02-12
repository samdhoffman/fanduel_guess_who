import React from "react"
import "./Layout.scss";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div className="Layout">
      <Navbar />
      <main className="content">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
