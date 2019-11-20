import React, { Component } from 'react';
import { Grid, Cell, Button , ProgressBar } from 'react-mdl';
import './style.css';

class Project extends Component {
    let
    constructor(props) {
        super(props);
        this.state = {
            projectName: "",
            repoUrl: "",
            description: "Click on any project!",
            languages: [],
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
            })
    }
    displayItems() {
        return this.state.items.map((item, index) => {
            return (
                <li className="circle-project ripple" key={index} onClick={() => this.setClickedComponent(item)} > {item.name} <div className="div-effect"></div><div></div></li>
            );
        });
    }
    setClickedComponent = (val) => {
        console.log(val);
        this.setState({ projectName: val.name, repoUrl: val.html_url, description: (val.description!=null)? val.description:"Its has no description" })
        this.getLanguage(val);
    }
    getLanguage = (val) => {
        fetch(val.languages_url)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                this.setState({ languages: Object.keys(result) });
            })
    }
    progressBar = ()=>{
        if( !this.state.isLoaded ) return <div><ProgressBar style={{width:'100%'}} indeterminate /></div>
    }
    getClickedComponent = () => {
        let { projectName, description, repoUrl, languages} = this.state;
        console.log(languages);
        
        return <div>
            <h2 className="project-description-content">{projectName}</h2>
            <div className="project-info">
                <div className="description-project">
                    <h4 style={{ color: '#ff4081' }}>Description</h4>{description}</div><br />
                <div >
                    <Button target="_blank" onClick={()=>{
                        window.location.href = repoUrl
                    }} style={{ float: 'right' }} raised colored ripple>Go to repository</Button>
                </div>
                <br />
                <div>
                    <ul>
                        <li style={{ fontSize: '18px', color: '#ff4081' }}>Technology Stack</li>
                        {
                            this.state.languages.map((item, index) => {
                                return (
                                    <li className="languages" key={index} > {item} </li>);
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>;
    }
    render() {
        return (
            <div className="main-div" >
            {this.progressBar()}
                <Grid style={{ backgroundColor: '#2b2a2a', padding: '0' ,marginBottom:'5em',marginTop:'5em'}}>
                    <Cell col={1}></Cell>
                    <Cell col={11}>
                        <div className="header-div">
                            <div><sup style={{ fontSize: '15px' }}>My</sup><font style={{ color: '#ff4081' }}>PROJECTS</font></div>
                        </div>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell col={1}></Cell>
                    <Cell col={10}>
                        <ul className="project-list">
                            {this.displayItems()}
                        </ul> </Cell>
                    <Cell col={1}></Cell>
                </Grid>
                {this.getClickedComponent()}
            </div >
        );
    }
}
export default Project;