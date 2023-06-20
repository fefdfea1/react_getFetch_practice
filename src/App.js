import Header from "./commponet/Header";
import styles from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import Issue from "./pages/Issue";
import Actions from "./pages/Actions";
import Code from "./pages/Code";
import CreateIssue from "./pages/CreateIssue";
import PullRequest from "./pages/PullRequest";
import Security from "./pages/Sequrity";
import Projects from "./pages/Projects";
import Nav from "./commponet/Nav";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/new" element={<CreateIssue />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pulls" element={<PullRequest />} />
        <Route path="/code" element={<Code />} />
        <Route path="/security" element={<Security />} />
        <Route path="/actions" element={<Actions />} />
      </Routes>
    </>
  );
}

export default App;
