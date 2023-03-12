import React from "react";

const Header = ({app}) => {
  return (
    <div className="py-5 w-full bg-green-600 text-white">
      This is the Heeeeaaaaaader {app.name}.
    </div>
  );
};

export default Header;
