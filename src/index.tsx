import ReactDom from "react-dom/client";
import UserSearch from "./refs/UserSearch";


const el =document.getElementById("root");

const root = ReactDom.createRoot(el!);

const App = () => {
  return (
    <div>
      <UserSearch/>
    </div>
  );
};
root.render(<App/>);