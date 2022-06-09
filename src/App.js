import React, { useEffect, useState } from 'react';
import User from './User';
import { Content, Loading } from './App.Styles';
import { getUsers } from './Api';
import Navbar from './Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap';


function App() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
    
  const handleScroll = event => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if( scrollHeight - scrollTop === clientHeight){
       
       setPage(prev => prev + 1);
    }
    // console.log("Scrolltop: ", scrollTop);
    // console.log("Clientheight: ", clientHeight);
    // console.log("Scrollheight: ", scrollHeight);
  };
   
   useEffect(() => {
     const loadUsers = async () => {
      setLoading(true);
      const newUsers = await getUsers(page);
      setUsers((prev) => [...prev, ...newUsers]);
      setLoading(false);
     }
     loadUsers();
   }, [page]);

  return (
    <>
     <div className="App">
    <Router>
     <scrollTop />
     <Navbar />
     <Routes>
       <Route exact path='/' element={<getUsers />} />
       <Route exact path='/user' element={<User />} />
     </Routes>
    </Router>
   
      <Content onScroll={handleScroll}>
        {users && users.map(user => <User key={user.cell} user={user} />)}
      </Content>
      {loading && <Loading>Loading...</Loading>}
    </div>  
    </>
  );
}

export default App;
