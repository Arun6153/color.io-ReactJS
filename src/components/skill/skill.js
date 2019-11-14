import React,{Component} from 'react';
import './style.css';
import {Grid , Cell ,ProgressBar} from 'react-mdl';

class Skill extends Component {
    render(){
        return (
        <div className="main-div">
            <Grid style={{backgroundColor:'#2b2a2a',padding:'0',marginTop:'5em'}}>
                <Cell col={1}></Cell>
                <Cell col={11}>
                    <div className="header-div">
                        <div><sup style={{fontSize:'15px'}}>My</sup>SUPER<font style={{color:'#ff4081'}}>POWERS</font></div>
                    </div>
                </Cell>
            </Grid>
            <Grid style={{marginTop:'50px'}}>
                <Cell col={1}></Cell>
                <Cell style={{fontSize:'30px',letterSpacing:'3px'}} col={10}>
                    SKILLS
                </Cell>
                <Cell col={1}></Cell>
            </Grid>

            <Grid>
                <Cell col={1}></Cell>
                <Cell className="skill-set" col={5}>
                    WEB DEVELOPMENT
                </Cell>
                <Cell col={5}>
                <div className="skill-div">
                    <h6 className="projectCount">01. HTML</h6>
                    <ProgressBar progress={90} buffer={90} />
                </div>
                <div className="skill-div">
                    <h6 className="projectCount">02. CSS</h6>
                    <ProgressBar progress={90} buffer={90} />
                </div>
                <div className="skill-div">
                    <h6 className="projectCount">03. JavaScript [including FW's/Lib's]</h6>
                    <ProgressBar progress={85} buffer={90} />
                </div>
                <div className="skill-div">
                    <h6 className="projectCount">04. Bootstrap</h6>
                    <ProgressBar progress={60} buffer={90} />
                </div>
                </Cell>
                <Cell col={1}></Cell>
            </Grid>
            <Grid>
                <Cell col={1}></Cell>
                <Cell className="skill-set" col={5}>
                    PROGRAMMING
                </Cell>
                <Cell col={5}>
                <div className="skill-div">
                    <h6 className="projectCount">01. C/C++</h6>
                    <ProgressBar progress={70} buffer={90} />
                </div>
                <div className="skill-div">
                    <h6 className="projectCount">02. Java</h6>
                    <ProgressBar progress={80} buffer={90} />
                </div>
                </Cell>
                <Cell col={1}></Cell>
            </Grid>
            <Grid>
                <Cell col={1}></Cell>
                <Cell className="skill-set" col={5}>
                    BACK END
                </Cell>
                <Cell col={5}>
                <div className="skill-div">
                    <h6 className="projectCount">01. PHP</h6>
                    <ProgressBar progress={60} buffer={90} />
                </div>
                <div className="skill-div">
                    <h6 className="projectCount">02. Node JS</h6>
                    <ProgressBar progress={85} buffer={90} />
                </div>
                </Cell>
                <Cell col={1}></Cell>
            </Grid>
            <Grid>
                <Cell col={1}></Cell>
                <Cell className="skill-set" col={5}>
                    DATABASE
                </Cell>
                <Cell col={5}>
                <div className="skill-div">
                    <h6 className="projectCount">01. SQL</h6>
                    <ProgressBar progress={70} buffer={90} />
                </div>
                <div className="skill-div">
                    <h6 className="projectCount">02. Mongo DB</h6>
                    <ProgressBar progress={80} buffer={90} />
                </div>
                </Cell>
                <Cell col={1}></Cell>
            </Grid>
            <Grid>
                <Cell col={1}></Cell>
                <Cell className="skill-set" col={5}>
                    EDITING
                </Cell>
                <Cell col={5}>
                <div className="skill-div">
                    <h6 className="projectCount">01. SONY VEGAS PRO</h6>
                    <ProgressBar progress={85} buffer={90} />
                </div>
                </Cell>
                <Cell col={1}></Cell>
            </Grid>
        </div>
        );
    }
}
export default Skill;