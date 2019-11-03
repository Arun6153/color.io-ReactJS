import React,{Component} from 'react';
import './style.css';
import {Grid , Cell ,ProgressBar} from 'react-mdl';

class Skill extends Component {
    render(){
        return (
        <div className="main-div">
           <Grid></Grid>
            <Grid style={{backgroundColor:'#2b2a2a',padding:'0'}}>
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
                    <h6 className="projectCount">01</h6>
                    <ProgressBar progress={90} buffer={90} />
                    <header>HTML</header>
                </div>
                <div className="skill-div">
                    <h6 className="projectCount">02</h6>
                    <header>CSS</header>
                    <ProgressBar progress={90} buffer={90} />
                </div>
                <div className="skill-div">
                    <h6 className="projectCount">03</h6>
                    <ProgressBar progress={75} buffer={90} />
                    <header>JavaScript / React JS</header>
                </div>
                <div className="skill-div">
                    <h6 className="projectCount">04</h6>
                    <ProgressBar progress={60} buffer={90} />
                    <header>Bootstrap</header>
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
                    <h6 className="projectCount">01</h6>
                    <ProgressBar progress={70} buffer={90} />
                    <header>C/C++</header>
                </div>
                <div className="skill-div">
                    <h6 className="projectCount">02</h6>
                    <ProgressBar progress={80} buffer={90} />
                    <header>Java</header>
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
                    <h6 className="projectCount">01</h6>
                    <ProgressBar progress={60} buffer={90} />
                    <header>PHP</header>
                </div>
                <div className="skill-div">
                    <h6 className="projectCount">02</h6>
                    <ProgressBar progress={20} buffer={90} />
                    <header>Node JS - Not Defined</header>
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
                    <h6 className="projectCount">01</h6>
                    <ProgressBar progress={80} buffer={90} />
                    <header>SQL</header>
                </div>
                <div className="skill-div">
                    <h6 className="projectCount">02</h6>
                    <ProgressBar progress={10} buffer={90} />
                    <header>Mongo</header>
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
                    <h6 className="projectCount">01</h6>
                    <ProgressBar progress={85} buffer={90} />
                    <header>SONY VEGAS PRO</header>
                </div>
                </Cell>
                <Cell col={1}></Cell>
            </Grid>

            <Grid style={{marginTop:'150px'}}></Grid>
            <Grid style={{color:'white',fontSize:'10px'}}>
                <Cell col={1}></Cell>
                <Cell col={1}>
                    asaini.cse17@chitkarauniversity.edu.in
                </Cell>
                <Cell col={10}></Cell>
            </Grid>
            <Grid style={{color:'white',fontSize:'10px'}}>
                    <Cell col={1}></Cell>
                    <Cell col={5}>
                    <div style={{float:"left",display:'flex',textDecoration:'none',width:'100%',justifyContent:'space-between'}}>
                    <a href="https://www.linkedin.com/in/arun-saini-6bba81148/">LinkedIn</a>
                    <a href="https://github.com/Arun6153">GitHub</a>
                    <a href="https://twitter.com/ArunSai60435674https://twitter.com/ArunSai60435674">Twitter</a>
                    <a href="https://www.instagram.com/a_saini_in/">Instagram</a>
                    <a href="https://www.youtube.com/channel/UCY1Eo15VNMQT6Ob2JZ2zVEg?view_as=subscriber">Youtube</a>
                    <a href="https://www.quora.com/profile/Arun-Saini-266">Quora</a>
                    <a href="https://www.facebook.com/profile.php?id=100004857307676">Facebook</a>
                    </div>
                    </Cell>
                    <Cell col={6}></Cell> 
            </Grid>
            <Grid style={{marginTop:'200px', color:'white'}}>
                <Cell col={1}></Cell>
                <Cell style={{background:'white',borderRadius:'4px',color:'#141414',width:'130px',padding:'4px'}} col={10}>I hope you Enjoyed my <b>Portfolio</b></Cell>
                <Cell col={1}></Cell>
            </Grid>
        </div>
        );
    }
}
export default Skill;