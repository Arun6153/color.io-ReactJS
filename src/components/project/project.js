import React, { Component } from 'react';
import { Grid, Cell, Content } from 'react-mdl';
import './style.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName:"",
            items: [],
            isLoaded: false,
        };
    }
    componentDidMount() {
        this.getProjects();
    }
    getProjects() {
        fetch(`https://api.github.com/users/Arun6153/repos`)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          items: result,
          isLoaded: true,
        });
      }
      );
    }
    displayItems() {
        return this.state.items.map((item,index) => {
            return (
                <li className="circle-project" onClick={() => this.setClickedComponent(item.name)} > {item.name} <div className="div-effect"></div><div></div></li>
                );
            });
        }
        setClickedComponent = (val) => {
            console.log(val);
        this.setState({ projectName: val });
    }
    getClickedComponent = () => {
        var val = this.state.tabVal;
            return val;
    }
    render() {
        return (
            <div className="main-div">
                <Grid>
                    <Cell col={1}></Cell>
                    <Cell col={10}>
                        <ul className="project-list">
                            {this.displayItems()}
                        </ul> </Cell>
                    <Cell col={1}></Cell>
                </Grid>
                <Grid className="project-description">
                    <Cell col={1}></Cell>
                    <Cell className="project-description-content" col={10} >
                        <Content>
                            <h1 style={{color:'white'}}>{this.getClickedComponent()}</h1>
                        </Content>
                    </Cell>
                    <Cell col={1}></Cell>
                </Grid>
            </div>
        );
    }
}
export default Project;