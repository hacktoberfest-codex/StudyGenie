import "./App.css"
import {  createContext, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import Login from './components/login/Login'
import Signup from './components/login/Signup'
import { initialState,reducer } from './reducer/UseReducer';

export const userContext = createContext();
function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
    <userContext.Provider value={{state,dispatch}}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Signup}/>
        </Switch>
      </Router>
      </userContext.Provider>
    </>
  )
}

export default App
