import React, { Component } from 'react'
import { Link, useParams } from "react-router-dom";


class EditPage  extends Component{
  
    constructor(props)
    {
      super(props)
      this.id = window.location.pathname.split('/')[2]
      this.state={name:"new"}
    }

    changeValue=(newVal)=>{
      this.setState({name:newVal})
    }


    render(){
    
        return (
            <div>
              <h1 className={"center"}>this is single page application for product id :  {this.id} </h1>
              <div className={'center'}>
                <form method='post'>
                  <input type='text' onChange={(event)=>this.changeValue(event.target.value)} value={this.state.name} />
                  <button type='submit'>Submit</button>
              </form>
              </div>
            </div>);
    }

}
export default  EditPage