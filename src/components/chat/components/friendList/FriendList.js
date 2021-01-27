import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentChatAction } from '../../../../redux/actions/chatActions';
import Friend from '../friend/Friend';

import './FriendList.scss';

const FriendList = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.chats);

  const openChat = (chat) => {
    dispatch(fetchCurrentChatAction(chat));
  };

  return (
    <div className="friends">
      <div className="title">
        <h3 className="m-0">Friends</h3>
        <button>ADD</button>
      </div>

      <hr />

      <div className="friends__box">
        {chats.length > 0 ? (
          chats.map((chat) => (
            <Friend click={() => openChat(chat)} chat={chat} key={chat.id} />
          ))
        ) : (
          <p className="no__chat">No Friends Added</p>
        )}
      </div>
    </div>
  );
};

export default FriendList;
