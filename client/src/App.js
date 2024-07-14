import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="text-xl">
      <Outlet />
    </main>
  );
}

export default App;
