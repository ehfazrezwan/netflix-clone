import React, { useEffect, useState } from "react";

function Nav() {
  const [show, handleShow] = useState([]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="nav">
      {/* Netflix logo */}
      {/* Avatar logo  */}
    </div>
  );
}

export default Nav;
