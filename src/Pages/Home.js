import React from 'react'
import  "../Styles/Home_page.scss"
import useFetch from '../Hooks/useEffect';
import { Link, useNavigate } from "react-router-dom";

export default function Home() {

  const [google,setGoogle]=React.useState({id:0,name:"ahmad"})
  const [local,SetLocal]=React.useState(localStorage.getItem("note"))
  const [state,dispatch] = React.useReducer(reducer,{isLoading:false})
  const url ="https://jsonplaceholder.typicode.com/todos"
  const navigate = useNavigate()
  let data=useFetch(url)

  function reducer(state, action){
    console.log(state)
    console.log(action)
  }

  return (
    <div>
        <h1 className={"center"}> Home Page </h1>
        <div className="continure">

         <p>{google.id}</p>
  
         <button onClick={()=>setGoogle((prevGoogle)=>({...prevGoogle,"id":prevGoogle.id+1}))}>changeVlaue </button>

         <button onClick={()=>dispatch({type:"CLEAR"})}>Dispatch </button>
            
        <table>
          <tr>
            <th>Id</th>
            <th>userId</th>
            <th>title</th>
            <th>completed</th>
            <th>Action</th>
          </tr>
          <tbody>
     {data &&
            data.map((item) => {
            return <>
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td>{item.title}</td>
                        <td>{(item.completed==true)?1:0}</td>
                        <td> 
                           <button onClick={() => navigate("/edit_page/"+item.id)}>
                              Edit
                           </button>
                        </td>
                      </tr>
                    </>
          })}
          </tbody>
          <tfoot>

          </tfoot>
     
       </table>
      </div>   
    </div>
  );
}

