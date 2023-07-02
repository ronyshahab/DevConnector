import "./App.css";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from "./component/layout/Landing";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import { Provider } from "react-redux";
import store from "./store";
import Profiles from "./component/layout/Profiles";
import Profile from "./component/layout/Profile";
import Dashboard from "./component/layout/Dashboard";
import CreateProfile from "./component/layout/CreateProfile";
import AddExperience from "./component/layout/AddExperience";
import AddEducation from "./component/layout/AddEducation";
import Posts from "./component/layout/Posts";
import Post from "./component/layout/Post";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        
          
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profiles" element={<Profiles/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="dashboard" element={<Dashboard/>}></Route>
          <Route path="create-profile" element={<CreateProfile/>}></Route>
          <Route path="add-experience" element={<AddExperience/>}></Route>
          <Route path="add-education" element={<AddEducation/>}></Route>
          <Route path="posts" element={<Posts/>}></Route>
          <Route path="post" element={<Post/>}></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
