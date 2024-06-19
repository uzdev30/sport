import React from "react";
import PropTypes from "prop-types";
function Button({ info, active, clas, link }) {
  console.log(active, info);
  return (
    <div
      className={`${
        active ? " bg-lightYellow " : " bg-white"
      } text-black font-bold  ${clas}  py-[15px] px-[27px] text-[20px] hover:scale-95 rounded-3xl`}
    >
      {info}
    </div>
  );
}
Button.prototype = {
  info: PropTypes.node.isRequired,
  active: PropTypes.bool,
  link: PropTypes.string,
};
export default Button;
