import React from "react";

export function Clock({ color, time }) {
  return <h1 style={{ color: color }}>{time}</h1>;
}

const LoginComponent = () => {
  return <Clock time="hehe" color={"red"} />;
};

export default LoginComponent;
