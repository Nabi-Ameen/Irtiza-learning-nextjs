import React from "react";
import { RxCross2 } from "react-icons/rx";

const Model = ({ toggle, setToggle }: any) => {
  return (
    <div className="bg-black/40 h-screen w-full fixed inset-0 flex items-center justify-center">
      <div className="bg-white w-96 h-60 rounded-md">
        <div className="float-right">
          <RxCross2 size={30} onClick={() => setToggle(!toggle)} />
        </div>
      </div>
    </div>
  );
};

export default Model;
