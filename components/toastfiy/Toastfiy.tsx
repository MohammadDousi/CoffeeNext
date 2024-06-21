import { Slide, toast } from "react-toastify";

type typeToastfiy = {
  message: string;
  type: "error" | "warning" | "success" | "info";
};
export default function Toastfiy({ message, type }: typeToastfiy) {
  const position = "top-center";
  const autoClose = 0;
  const theme = "light";
  const pauseOnHover = false;

  switch (type) {
    case "error": // error
      toast.error(message, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: pauseOnHover,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Slide,
      });
      break;
    case "warning": // warning
      toast.warn(message, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: pauseOnHover,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Slide,
      });
      break;
    case "success": // success
      toast.success(message, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: pauseOnHover,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Slide,
      });
      break;
    case "info": // info
      toast.info(message, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: pauseOnHover,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Slide,
      });
      break;
    default:
      toast(message, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: pauseOnHover,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Slide,
      });
      break;
  }
}
