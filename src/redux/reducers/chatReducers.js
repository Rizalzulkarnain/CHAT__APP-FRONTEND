import { produce } from 'immer';
import * as Type from '../constants/chatConstants';

const chatState = {
  loading: false,
  error: null,
  chats: [],
  currentChat: {},
};

const chatReducers = produce((draft, action) => {
  switch (action.type) {
    case Type.FETCH_CHAT_REQUEST:
      draft.loading = true;
      draft.chats = [];
      draft.error = null;
      return;

    case Type.FETCH_CHAT_SUCCESS:
      draft.loading = false;
      draft.chats = action.payload;
      draft.error = null;
      return;

    case Type.FETCH_CHAT_ERROR:
      draft.loading = false;
      draft.chats = [];
      draft.error = action.payload;
      return;

    case Type.FETCH_CURRENT_CHAT_REQUEST:
      draft.loading = true;
      draft.currentChat = {};
      draft.error = null;
      return;

    case Type.FETCH_CURRENT_CHAT_SUCCESS:
      draft.loading = false;
      draft.currentChat = action.payload;
      draft.error = null;
      return;

    case Type.FETCH_CURRENT_CHAT_ERROR:
      draft.loading = false;
      draft.currentChat = {};
      draft.error = action.payload;
      return;

    default:
      return;
  }
}, chatState);

export default chatReducers;
