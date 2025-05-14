
import React from 'react';
import Message from './Message'; 

const App: React.FC = () => {
  const messageText: string = "Добро пожалолвать!";

  return (
    <div>
      <h1>Добро пожаловать в приложение</h1>
      <Message text={messageText} />
    </div>
  );
};

export default App;