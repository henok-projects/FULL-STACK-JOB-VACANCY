import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.component"
import Footer from "./components/footer.component"
import ContactUs from "./components/contactUs.component"
import Register from "./components/register.component"
import Login from "./components/login.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
     
     
      <Navbar />
     
      <div className="container">
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/contact" component={ContactUs} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
