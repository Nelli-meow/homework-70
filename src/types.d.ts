export interface IContact {
  name: string;
  email: string;
  phone: string;
  photo:string;
  id: string;
}

export interface IContactAPI {
  [id: string]: IContact;
}