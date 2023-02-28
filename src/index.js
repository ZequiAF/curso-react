import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      greet={function() {alert('Hello')}}
      address={{ street: "123 Main Street", city: "New York" }}
    />
  </>
);
