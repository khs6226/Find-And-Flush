import React from "react";
import ReviewForm from "./ReviewForm/ReviewForm";
import NavBar from "./Navbar";
import ListView from "./ListView"

const App = () => (
  <div>
    <NavBar />
    <ListView />
    <ReviewForm />
  </div>
);

export default App;
