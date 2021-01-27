import * as Type from '../constants/chatConstants';
import * as API from '../../services/Api';

export const fetchChatsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: Type.FETCH_CHAT_REQUEST,
    });

    await API.fetchChats().then(({ data }) => {
      data.data.forEach((chat) => {
        chat.Users.forEach((user) => {
          user.status = 'offline';
        });
        chat.Messages.reverse();
      });
      dispatch({
        type: Type.FETCH_CHAT_SUCCESS,
        payload: data.data,
      });
      return data;
    });
  } catch (error) {
    dispatch({
      type: Type.FETCH_CHAT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchCurrentChatAction = (chat) => async (dispatch) => {
  try {
    dispatch({
      type: Type.FETCH_CURRENT_CHAT_REQUEST,
    });

    dispatch({
      type: Type.FETCH_CURRENT_CHAT_SUCCESS,
      payload: chat,
    });
  } catch (error) {
    dispatch({
      type: Type.FETCH_CURRENT_CHAT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
