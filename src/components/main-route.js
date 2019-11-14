import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './home/home';
import Project from './project/project';
import Skill from './skill/skill';
import About from './about/about';


const MainRoute = () => (
    <Switch>
        <Route exact path="/" component = {Home} />
        <Route  path="/project/project" component = {Project} />
        <Route  path="/skill/skill" component = {Skill} />
        <Route  path="/about/about" component = {About} />
    </Switch>
)


export default MainRoute;