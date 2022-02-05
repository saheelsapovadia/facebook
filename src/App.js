import React from "react";
import Feed from "./Components/Header/Feed";
import Header from "./Components/Header/Header";
import { Sidebar } from "./Components/Header/Sidebar";

function App() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      {/* Header */}
      <Header></Header>
      <main className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgets */}
      </main>
    </div>
  );
}

export default App;
