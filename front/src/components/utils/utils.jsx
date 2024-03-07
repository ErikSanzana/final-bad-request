// funciones de swal (que se llaman) y otras que se llaman
import Swal from "sweetalert2";
export { confirmBuy, forOrder, addUnit, lessUnit };

const confirmBuy = () => {
  Swal.fire({
    timer: "2000",
    timerProgressBar: true,
    color: "#dfded6",
    icon: "warning",
    title: "Redireccionaremos a tu proveedor de pago",
    text: "Estaremos preparando tus productos!",
    footer: '<a href=""> no redirecciona nada... pero esta bonito</a>',
    customClass: {
      container: "CustomCssContainter",
      popup: "CustomPopUpCss",
      closeButton: "CustomButtonCss",
      confirmButton: "CustonButtonOnActionCss"
    }
  });
};

const forOrder = () => {
  //66
  Swal.fire({
    position: "top-end",
    toast: true,
    icon: "success",
    title: "añadiste con exito el producto seleccionado",
    showConfirmButton: false,
    timer: 1500,
    color: "#00000",
    customClass: {
      popup: "CustomPopUpCss"
    }
  });
};

const addUnit = () => {
  //copiada y pegada, ajustar
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  });
  Toast.fire({
    title: "le subiste 1 al carro wey",
    color: "#00000",
    customClass: {
      popup: "CustomPopUpCss"
    }
  });
};

const lessUnit = () => {
     //copiada y pegada, ajustar
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      Toast.fire({
        title: "le bajaste 1 al carro wey",
        color: "#00000",
        customClass: {
          popup: "CustomPopUpCss",
        },
      });
}