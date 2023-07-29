import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SessionState } from "../_interface";

// Définir la forme de la charge utile pour l'action connectShop
interface SessionShopAction {
  payload: {
    shopName: string;
    logo: string;
    adresse?: string;
    description: string;
    langue: string;
    _idUser: string;
    _id: string;
  };
  type: string;
}

// Définir la forme de la charge utile pour l'action connectUser
interface SessionUserAction {
  payload: {
    email: string;
    fullname: string;
    password: string;
    phone: number;
    _id: string;
  };
  type: string;
}

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
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
  } as SessionState,

  reducers: {
    connectShop: (
      state: SessionState,
      action: PayloadAction<SessionShopAction["payload"]>
    ) => {
      const { payload } = action;
      state.Shop = payload;
      state.connected = true;
    },
    connectUser: (
      state: SessionState,
      action: PayloadAction<SessionUserAction["payload"]>
    ) => {
      const { payload } = action;
      state.User = payload;
      state.connected = true;
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
    },
  },
});
export const { connectUser, connectShop, disconnect } = sessionSlice.actions;
