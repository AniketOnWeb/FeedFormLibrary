import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const CustomPortal = ({ children }) => {
  const elref = useRef(null);
  if (!elref.current) {
    const div = document.createElement("div");
    div.classList.add("popoverInner");
    elref.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal6");
    modalRoot.appendChild(elref.current);

    return () => {
      modalRoot.removeChild(elref.current);
    };
  }, []);

  return createPortal(children, elref.current);
};

export default CustomPortal;
