import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

const App = () => {
  const items = [
    {
      title: "What is React?",
      content: "React is a front end javascript framework",
    },
    {
      title: "Why use React?",
      content: "React is a favourite JS library among engineers",
    },
    {
      title: "How do you use React?",
      content: "you use React by creating components",
    },
  ];

  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search/>
    </div>
  );
};

export default App;
