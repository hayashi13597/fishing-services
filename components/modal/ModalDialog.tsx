import React from "react";

interface ModalDialogProps {
  message: string;
  isCallback: (isChoose: boolean) => void;
}
const ModalDialog = ({ message, isCallback }: ModalDialogProps) => {
  const handleChoose = (isChoose: boolean) => {
    isCallback(isChoose);
  };
  return (
    <div
      onClick={() => {
        handleChoose(false);
      }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        id="modal-delete"
        className="zoom-anim-dialog modal"
      >
        <h6 className="modal__title font-bold text-2xl">Thông báo</h6>
        <p
          className="modal__text text-base"
          dangerouslySetInnerHTML={{ __html: message }}
        ></p>
        <div className="modal__btns ">
          <div></div>
          <button
            onClick={() => handleChoose(false)}
            className="modal__btn modal__btn--dismiss border-2  hover:bg-primary  bg-primary/90 text-white"
            type="button"
          >
            Đóng
          </button>
        </div>
        <button
          onClick={() => handleChoose(false)}
          title="Close (Esc)"
          type="button"
          className="absolute top-2 right-3 text-text text-3xl hover:text-primary"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ModalDialog;
