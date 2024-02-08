import React, { Component, useState } from "react";
import { Outlet, Link } from "react-router-dom"
import  "../Styles/Navbar.scss"

class Layout extends React.Component{
  
  constructor(props){
    super(props);
    this.state={"active":""}
  }

  static getDerivedStateFromProps(props,state) {

    if(state.active==""){
      let pathNameActive=window.location.pathname.split('/')[1]
        pathNameActive=(pathNameActive=='' || pathNameActive==undefined)?"home":pathNameActive

        return {"active":pathNameActive}
    }

     return state
  }


  changeState=(val)=>{
    this.setState({"active":val})
  }


   render(){
      return (
        <>
          <nav>
            <ul>
              <li>
                <Link onClick ={()=>this.changeState("home")}  className={this.state.active=="home"?"active":""}  to="/">Home</Link>
              </li>
              <li>
                <Link onClick={()=>this.changeState("about")} className={this.state.active=="about"?"active":""} to="/about">About Page</Link>
              </li>
              <li>
                <Link onClick={()=>this.changeState("my_form")} className={this.state.active=="my_form"?"active":""} to="/my_form">My Form</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </>
        )
  }
}


export default Layout;