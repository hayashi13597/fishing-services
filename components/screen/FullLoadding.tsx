import React from "react";
import Loading from "../../app/loading";

const FullLoadding = () => {
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50">
      <Loading />
    </div>
  );
};

export default FullLoadding;
