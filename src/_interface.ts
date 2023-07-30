export interface ShopDatas {
  shopName: string;
  logo: string;
  email: string;
  fullname: string;
  phone: string;
  password: string;
  adresse: string;
  description: string;
  langue: string;
}

export interface Theme {
  image: string;
  name: string;
  date: string;
}

export interface Product {
  _id: number;
  name: string;
  price: number;
  image: string;
}

export interface SessionState {
  Shop: {
    shopName: string;
    logo: string;
    adresse?: string;
    description: string;
    langue: string;
    _idUser: string;
    _id: string;
  };
  User: {
    email: string;
    fullname: string;
    password: string;
    phone: number;
    _id: string;
  };
  connected: boolean;
}
export interface ShopUser {
  Shop: {
    shopName: string;
    logo: string;
    adresse?: string;
    description: string;
    langue: string;
    _idUser: string;
    _id: string;
  };
  User: {
    email: string;
    fullname: string;
    password: string;
    phone: number;
    _id: string;
  };
}
