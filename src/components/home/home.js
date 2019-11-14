import React,{Component  } from 'react';
import {Grid , Cell} from 'react-mdl';
import './style.css';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            hover:false,
            path:""
        };
    }
backgroundImageToggle = (flag,path) =>{
    //console.log(path);
   this.setState({hover: flag,path : this.returnPath(flag,path)});
}
returnPath=(bool,path)=>{
    if(bool){
        return "url('"+path+"')";
    }
    return "url('')";
}
    render(){
        return (
        <div id = {this.state.hover ? "parallax":"noParallax"} style={{width:'100%',height:'auto',margin:'auto',backgroundImage:`${this.state.path}`}}>
            <Grid className="home-grid" >
                <Cell col={1}></Cell>
                <Cell col={8} onMouseOver={()=>{this.backgroundImageToggle(true,"./img/avatar.jpg")}} onMouseLeave={()=>{this.backgroundImageToggle(false,"")}}>
                <h1 className="headerTitle">HI, I'M <span id="avatarTrigger">ARUN SAINI</span></h1>
                </Cell>
                <Cell col={3}></Cell>
            </Grid>
            <Grid>
                <Cell col={1}></Cell>
                <Cell col={4} style={{color:'white',fontSize:'16px',textAlign:'Left'}}>
                     FULL STACK WEB DEVELOPER
                </Cell>
                <Cell col={1}></Cell>
                <Cell col={5} style={{minWidth:'300px'}}>
                    <div style={{color:'white',textAlign:'justify',fontSize:'18px',transition:'0.5s'}}>
                    I am a passionate developer looking to make an impact in this world. There are a few things that mean the most to me. My family, my friends, developing new things and doing my part in making this a better world. I'm currently seeking out the right team where I can work with other passionate individuals to build digital products that positively impact peoples lives. I believe in always exceeding expectations and continuously learning to be the best at my craft. This is a collection of Websites and Web Apps that help demonstrate my knowledge and abilities as a Web Developer.Hit me up, let's make something awesome!
                    </div>
                </Cell>
                <Cell col={1}></Cell>
            </Grid>


            <Grid className="projectIntent" style={{marginTop:' 150px'}}>
                <Cell col={1}></Cell>
                <Cell col={10}>
                    <Grid style={{color:'white',fontSize:'10px'}}>FEATURED WORK :</Grid>
                    <Grid className="projectCount">01</Grid>
                    <Grid></Grid>
                    <Grid  onMouseOver={()=>{this.backgroundImageToggle(true,"./img/1.png")}} onMouseLeave={()=>{this.backgroundImageToggle(false,"")}}>
                        <Link to="../project/project" className="projectTitle">PRO SOLUT!ON</Link>
                    </Grid>
                    <Grid style={{height:'15px'}}></Grid>
                    <Grid style={{color:'white',fontSize:'16px'}}>A voting system website .</Grid>
                </Cell>
                <Cell col={1}></Cell>
            </Grid>

            <Grid className="projectIntent" style={{marginTop:' 50px'}}>
                <Cell col={1}></Cell>
                <Cell col={10}>
                    <Grid className="projectCount">02</Grid>
                    <Grid></Grid>
                    <Grid  onMouseOver={()=>{this.backgroundImageToggle(true,"./img/2.png")}} onMouseLeave={()=>{this.backgroundImageToggle(false,"")}}>
                    <Link to="../project/project" className="projectTitle" >THE PROBLEM</Link>
                    </Grid>
                    <Grid style={{height:'15px'}}></Grid>
                    <Grid style={{color:'white',fontSize:'16px'}}>This project made me winner of a hackathon.</Grid>
                </Cell>
                <Cell col={1}></Cell>
            </Grid>

            <Grid className="projectIntent" style={{marginTop:' 50px'}}>
                <Cell col={1}></Cell>
                <Cell col={10}>
                    <Grid className="projectCount">03</Grid>
                    <Grid></Grid>
                    <Grid onMouseOver={()=>{this.backgroundImageToggle(true,"./img/3.png")}} onMouseLeave={()=>{this.backgroundImageToggle(false,"")}}>
                    <Link to="../project/project" className="projectTitle" > SKYCAST</Link>
                    </Grid>
                    <Grid style={{height:'15px'}}></Grid>
                    <Grid style={{color:'white',fontSize:'16px'}}>A weather forCast webApp by using React Js and DarkSky api.</Grid>
                </Cell>
                <Cell col={1}></Cell>
            </Grid>

            <Grid className="projectIntent" style={{marginTop:' 50px'}}>
                <Cell col={1}></Cell>
                <Cell col={10}>
                    <Grid className="projectCount" >04</Grid>
                    <Grid></Grid>
                    <Grid onMouseOver={()=>{this.backgroundImageToggle(true,"./img/4.png")}} onMouseLeave={()=>{this.backgroundImageToggle(false,"")}}>
                    <Link to="../project/project" className="projectTitle">EXAM MANAG. SYS.</Link>
                    </Grid>
                    <Grid style={{height:'15px'}}></Grid>
                    <Grid style={{color:'white',fontSize:'16px'}}>This was my mini college project, but its in Full stack.</Grid>
                </Cell>
                <Cell col={1}></Cell>
            </Grid>
        </div>
        );
    }
}
export default Home;