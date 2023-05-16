import React from "react";
const LoginComponent = () => {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default LoginComponent;
