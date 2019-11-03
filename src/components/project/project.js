import React, { Component } from 'react';
import { Grid, Cell, Content } from 'react-mdl';
import './style.css';
import ExamMS from './Projects Components/examManagementSystem';
import ProSolution from './Projects Components/proSolution';
import TheProblem from './Projects Components/theProblem';
import Skycast from './Projects Components/skyCast';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabVal: 1
        };
    }
    setClickedComponent = (val) => {
        this.setState({ tabVal: val });
    }
    getClickedComponent = () => {
        var check = this.state.tabVal;
        if (check === 1) {
            return <div > < ProSolution /> </div>;
        } else if (check === 2) {
            return <TheProblem />;
        } else if (check === 3) {
            return <Skycast />;
        } else if (check === 4) {
            return <ExamMS />;
        }
    }
    render() {
        return (
            <div className="main-div">
                <Grid>
                    <Cell col={1}></Cell>
                    <Cell col={10}>
                        <ul className="project-list">
                            <li className="circle-project" onClick={() => this.setClickedComponent(1)} > Pro So!ution <div className="div-effect"></div></li>
                            <div ></div>
                            <li className="circle-project" onClick={() => this.setClickedComponent(2)} > The Problem  <div className="div-effect"></div></li>
                            <div ></div>
                            <li className="circle-project" onClick={() => this.setClickedComponent(3)} > SkyCast  <div className="div-effect"></div></li>
                            <div ></div>
                            <li className="circle-project" onClick={() => this.setClickedComponent(4)} > Exam Manag.Sys.  <div className="div-effect"></div></li>
                            <div ></div>
                        </ul> </Cell>
                    <Cell col={1}></Cell>
                </Grid>
                <Grid className="project-description">
                    <Cell col={1}></Cell>
                    <Cell className="project-description-content" col={10} >
                        <Content>
                            {this.getClickedComponent()}
                        </Content>
                    </Cell>
                    <Cell col={1}></Cell>
                </Grid>
            </div>
        );
    }
}
export default Project;