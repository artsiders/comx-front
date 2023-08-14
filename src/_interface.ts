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
export interface Tag {
  _id: string;
  name: string;
  _idShop: string;
}
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  priceAfterDiscount: number;
  statut: boolean;
  tag: Tag;
  image: string;
  _idShop: string;
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
    password?: string;
    phone: number;
    _id: string;
  };
  connected: boolean;
  token: string;
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
    password?: string;
    phone: number;
    _id: string;
  };
}
