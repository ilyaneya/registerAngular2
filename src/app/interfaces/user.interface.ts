export interface IUser  {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: number;
  website: string;
 company: IUserCompany;
}
export interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: {
    lat: number;
    lng: number;
  };
}
export interface IUserCompany{
  name: string;
  catchPhrase: string;
  bs: string;
}
