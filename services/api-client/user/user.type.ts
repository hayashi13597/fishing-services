export interface IUser {
  id: string;
  email: string;
  fullname: string;
  phone: string;
  avata: string;
  address: string;
  role: string;
  visiable: boolean;
  access_token: string;
  created_at: string;
  updated_at: string;
}
export interface IUploadAvata {
  file: FormData;
  id: string;
}
export interface IChangePassword {
  username: string;
  oldPassword: string;
  newPassword: string;
}
