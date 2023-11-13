import React from "react";
import "./modal.scss";
interface IModalStatusProps {
  isCallback: (isChoose: boolean) => void;
  title?: string;
  btnAccept?: string;
  btnCancel?: string;
}
const ModalStatus = ({
  isCallback,
  title = "Bạn sẽ xóa nó chứ?",
  btnAccept = "Xóa",
  btnCancel = "Hủy",
}: IModalStatusProps) => {
  const handleChoose = (isChoose: boolean) => {
    isCallback(isChoose);
  };
  return (
    <div
      onClick={() => {
        handleChoose(false);
      }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        id="modal-delete"
        className="zoom-anim-dialog modal"
      >
        <h6 className="modal__title font-bold text-2xl">Thông báo</h6>
        <p className="modal__text text-base">{title}</p>
        <div className="modal__btns">
          <button
            onClick={() => handleChoose(true)}
            className="modal__btn modal__btn--apply bg-primary text-white hover:bg-blue-800"
            type="button"
          >
            {btnAccept}
          </button>
          <button
            onClick={() => handleChoose(false)}
            className="modal__btn modal__btn--dismiss border-2 border-primary hover:bg-blue-800  hover:border-blue-800 hover:text-white"
            type="button"
          >
            {btnCancel}
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

export default ModalStatus;
