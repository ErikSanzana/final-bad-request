export const URLBASE = "http://localhost:3000"
  
  
  // "https://backend-backup-3tm8.onrender.com";




export const ENDPOINT = {
  login: URLBASE + `/api/v1/login/user/login`,
  registarUsuario: URLBASE + `/api/v1/user`,
  products: URLBASE + `/api/v1/store/products`,
};

export const ADMINENDPOINT = {
  users: URLBASE + `/api/v1/admin`,
  products: URLBASE + `/api/v1/store/admin`

}