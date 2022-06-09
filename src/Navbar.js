import { Link, NavLink } from "react-router-dom"
const Navbar = () => {
  return (
   
 
 <>

 {/* <ul>
    <li><NavLink to="/" style={({isActive}) => {return{backgroundColor: isActive ? 'red' : ''}}}
    >getUsers</NavLink></li>
    <li><NavLink to="/user" style={({isActive}) => {return{backgroundColor: isActive ? 'yellow' : ''}}}
    >User</NavLink></li>     
 </ul> */}

  <ul>
     <li><Link to="/">Api</Link></li>
     <li><Link to="/user">User</Link></li>
  </ul>

  {/* <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li> */}
    </>
  )
}

export default Navbar




 