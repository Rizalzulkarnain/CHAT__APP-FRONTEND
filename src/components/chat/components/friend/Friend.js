import { useSelector } from 'react-redux';
import { userStatus } from '../../../../utils/helpers';
import './Friend.scss';

const Friend = ({ chat, click }) => {
  const currentChat = useSelector((state) => state.chat.currentChat);

  const isChatOpen = () => {
    return currentChat.id === chat.id ? `opened` : '';
  };

  const lastMessage = () => {
    if (chat.Messages.length === 0) return '';

    const message = chat.Messages[chat.Messages.length - 1];
    return message.type === 'image' ? 'image uploaded' : message.message;
  };

  return (
    <div onClick={click} className={`friend__list ${isChatOpen()}`}>
      <div>
        <img
          style={{ width: '40px', height: '40px' }}
          src={chat.Users[0].avatar}
          alt="avatar"
        />
        <div className="friend__info">
          <h4 className="m-0">
            {chat.Users[0].firstname} {chat.Users[0].lastname}
          </h4>
          <h5 className="m-0">{lastMessage()}</h5>
        </div>
      </div>
      <div className="friend__status">
        <span className={`online__status__${userStatus(chat.Users[0])}`}></span>
      </div>
    </div>
  );
};

export default Friend;
