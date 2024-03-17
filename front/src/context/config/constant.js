export const URLBASE =`https://backend-backup-3tm8.onrender.com`
const URLBACK = `/api/v1`
  
   // "http://localhost:3000
  // "https://backend-backup-3tm8.onrender.com";
  //  https://backend-backup-3tm8.onrender.com
  // /users/history/:id


export const ENDPOINTPRODUCTS = {
  history: URLBASE+URLBACK+`/users/history`
}

export const ENDPOINT = {
  login: URLBASE + URLBACK + `/login/user/login`,
  registarUsuario: URLBASE + URLBACK + `/user`,
  user: URLBASE + URLBACK + `/admin`,
  products: URLBASE + URLBACK + `/store/products`,
  validarGogle: URLBASE + URLBACK + `/google/user/login`,
};

export const ADMINENDPOINT = {
  users: URLBASE + URLBACK + `/admin`,
  products: URLBASE + URLBACK + `/store/admin`,
  deleteUser: URLBASE + URLBACK + `/user`,
  
}