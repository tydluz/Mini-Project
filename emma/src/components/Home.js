import React from "react";
import { useState } from "react";

export default function Home() {
  const click = useState("Home Page");
  return <h1>Welcome to your {click} </h1>;
}
