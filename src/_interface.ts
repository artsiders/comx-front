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

export interface Product {
  _id: number;
  name: string;
  price: number;
  image: string;
}
