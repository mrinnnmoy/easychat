import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">EasyChat</span>
      <div className="user">
        <img src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="current-user" />
        <span>Mrinmoy</span>
        <button>Log Out</button>
      </div>
    </div>
  )
};

export default Navbar;