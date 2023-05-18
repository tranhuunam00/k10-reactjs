import React from "react";

export function Clock({ color, time }) {
  return <h1 style={{ color: color }}>{time}</h1>;
}

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

const RenderName = ({ name, isRender }) => {
  return <h1> {name}</h1>;
};

const userRender = people.filter(
  (value, index) => value.profession === "chemist"
);
const LoginComponent = () => {
  return (
    <div>
      {userRender.map((value) => (
        <RenderName key={value.id} name={value.name} />
      ))}
    </div>
  );
};

export default LoginComponent;
