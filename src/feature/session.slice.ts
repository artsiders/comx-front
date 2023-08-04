import Cookies from "js-cookie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SessionState } from "../_interface";

const loadState = () => {
  try {
    const serializedState = Cookies.get("session");
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: SessionState) => {
  try {
    const serializedState = JSON.stringify(state);
    Cookies.set("session", serializedState);
  } catch (err) {
    console.error("Error saving state to cookies:", err);
  }
};

const initialState: SessionState = loadState() || {
  Shop: {
    shopName: "",
    logo: "",
    adresse: "",
    description: "",
    langue: "",
    _idUser: "",
    _id: "",
  },
  User: {
    email: "",
    fullname: "",
    password: "",
    phone: 0,
    _id: "",
  },
  connected: false,
  token: "",
};

// Définir la forme de la charge utile pour l'action connectShop
interface SessionAction {
  payload: SessionState;
  type: string;
}

export const sessionSlice = createSlice({
  name: "session",
  initialState,

  reducers: {
    connect: (
      state: SessionState,
      action: PayloadAction<SessionAction["payload"]>
    ) => {
      const { payload } = action;
      state.Shop = payload.Shop;
      state.User = payload.User;
      state.connected = true;
      state.token = payload.token;
      saveState(state); // enregistrement de l'état dans les cookies
    },

    disconnect: (state: SessionState) => {
      state.User = {
        email: "",
        fullname: "",
        password: "",
        phone: 0,
        _id: "",
      };
      state.Shop = {
        shopName: "",
        logo: "",
        adresse: "",
        description: "",
        langue: "",
        _idUser: "",
        _id: "",
      };
      state.connected = false;
      state.token = "";
      saveState(state); // enregistrement de l'état dans les cookies
    },
    updateSession: (
      state: SessionState,
      action: PayloadAction<SessionAction["payload"]>
    ) => {
      const { payload } = action;
      state.Shop = payload.Shop;
      state.User = payload.User;
      saveState(state); // enregistrement de l'état dans les cookies
    },
  },
});

export const { connect, disconnect, updateSession } = sessionSlice.actions;
