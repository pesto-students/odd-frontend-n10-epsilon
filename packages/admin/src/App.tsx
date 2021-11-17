import { Routes } from "./routes";
import { BaseClient } from "@odd/base";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const base = new BaseClient("https://reqres.in");
    base.apiGet("/api/users/").then((users) => {
      console.log(users.data);
    });
  }, []);

  return <Routes />;
}

export default App;
