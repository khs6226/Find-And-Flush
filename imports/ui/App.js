import React from "react";
import ReviewForm from "./ReviewForm";
import NavBar from "./NavBar";
import ListView from "./ListView"
import DetailView from "./DetailView"

const App = () => (
  <div>
    <NavBar />
    <ListView />
    <DetailView />
    <ReviewForm />
  </div>
);

export default App;
