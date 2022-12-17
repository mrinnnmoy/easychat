import React from 'react';

const Message = () => {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src="https://images.unsplash.com/photo-1671127568852-793346ad11bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
        <span>just now</span>
      </div>  
      <div className="messageContent">
        <p>Hey</p>
        <img src="" alt="" />
      </div>
    </div>
  )
};

export default Message;