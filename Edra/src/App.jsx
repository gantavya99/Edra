import { useEffect, useState } from "react";
import Prac from "./components/Prac";
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Todo from "./components/Todo";
import ProductList from "./components/ProductList";
import Stopwatch from "./components/Stop";
import TicTac from "./components/TicTac";
import Carousel from "./components/Carousel";


function App() {
 

  return (
    <>
      <Header />
      {/* <Prac />  */}
      {/* <List /> */}
      {/* <Todo />
      <ProductList /> */}
      {/* <Stopwatch /> */}
      {/* <TicTac /> */}
      <Carousel />
    </>
  );
}

export default App;
