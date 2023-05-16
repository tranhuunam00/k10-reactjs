import "./App.css";
import LoginComponent from "./modules/auth/login";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const today = new Date();

function App() {
  return <h1>{person.name}'s Todos</h1>;
}

export default App;
