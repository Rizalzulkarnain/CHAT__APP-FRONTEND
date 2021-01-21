import Navbar from './components/Navbar/Navbar';

import './Chat.scss';

const Chat = () => {
  return (
    <div className="chat__container">
      <Navbar />
      <div className="chat__wrap">Data</div>
    </div>
  );
};

export default Chat;
