import React from "react";
import Main from "./components/Main/Main";
import {GlobalStyle} from './style/style';
import { TaskProvider } from "./contexts/TaskContext";

function App() {
  return (
    <TaskProvider>
      <GlobalStyle />
      <Main />
    </TaskProvider>
  );
}

export default App;