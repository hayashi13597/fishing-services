import { toast } from "react-toastify";
const ToastNotify = (message = "", icon?: string) => {
  const options: any = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  if (icon) options.icon = icon;
  return {
    normal(suboptions?: Omit<typeof options, "theme">) {
      return toast(message, { ...options, ...suboptions });
    },
    success(suboptions?: Omit<typeof options, "theme">) {
      return toast.success(message, { ...options, ...suboptions });
    },
    error(suboptions?: Omit<typeof options, "theme">) {
      return toast.error(message, { ...options, ...suboptions });
    },
    warning(suboptions?: Omit<typeof options, "theme">) {
      return toast.warning(message, { ...options, ...suboptions });
    },
    info(suboptions?: Omit<typeof options, "theme">) {
      return toast.info(message, { ...options, ...suboptions });
    },
    showError(err) {
      if (err) {
        return toast.error(err?.message || "Lỗi chưa chạy server", options);
      }
    },
  };
};
export default ToastNotify;
