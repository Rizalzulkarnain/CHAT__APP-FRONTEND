import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import FriendList from './components/friendList/FriendList';
import Messenger from './components/Messenger/Messenger';

import { useDispatch } from 'react-redux';
import { fetchChatsAction } from '../../redux/actions/chatActions';

import './Chat.scss';

const Chat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatsAction());
  }, [dispatch]);

  return (
    <div className="chat__container">
      <Navbar />
      <div className="chat__wrap">
        <FriendList />
        <Messenger />
      </div>
    </div>
  );
};

export default Chat;
