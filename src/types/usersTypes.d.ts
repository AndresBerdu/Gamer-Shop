export interface UserInterface {
  firstname: string;
  lastname: string;
  username: string;
  phone: string;
  email: string;
  number_document: string;
}

export interface UserLoginInterface {
  email: string;
  password: string;
}

export interface UserRegisterInterface extends UserLoginInterface {}
