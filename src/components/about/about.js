import React,{Component} from 'react';
import {Grid , Cell} from 'react-mdl';
import './style.css';

class About extends Component {
    render(){
        return (
        <div className="main-div">
            <Grid style={{height:'3vw'}}></Grid>
            <Grid>
                <Cell col={1}></Cell>
                <Cell col={10} className="col-div"><header className="col-header">I am glad, that you came this far<sub style={{fontSize:'10px',color:'rgba(255,255,255,.7)'}}>All about me.</sub></header></Cell>
                <Cell col={1}></Cell>
            </Grid>
            <Grid>
                <Cell col={1}></Cell>
                <Cell hidePhone col={2} className="col-img"></Cell>
                <Cell col={4}>
                <div className="short-p">
                        <div className="theShort">The Short</div>
                        <p style={{fontWeight:'10px'}}>
                            Arun Saini is a Dev[Developer] and Programmer. He is currently pursuing his Computer Science Bachelors degree in an Indian University. I am Specialized in full Stack web Developement and some Video Editing. 
                        </p>
                </div>
                <div className="short-p">
                        <div className="theLong" style={{marginTop:'30px',borderTop:'0.5px solid #61dafb',paddingTop:'45px'}}>The Long</div>
                        <p>I was born in Dist. Una[Himachal Pradesh], where i am from Punjab and but raised in Haryana[Kalka]. We are four members in our family, my father, mother, brother and me. I did my 10th from D.A.V Public School and +2 from Govt. Model Chandigarh. And currently i am studying in chitkara University.
                            I have learned various technologies through the time[2017-2019]. You can see my learnt technologies list at S-KILLS page and yes list will will keep on increasing.
                            <br/><br/>I hope you did'nt get bored .....
                        </p>
                </div>
                </Cell>
                <Cell col={3}>
                    <h3 style={{margin:'0'}}>Get In Touch</h3>
                    <form>
                        <div className="form-internal">
                            <label style={{width:'100%'}}>Name</label><br/>
                            <input style={{width:'100%',border:'1 solid black',height:'25px',padding:'5px'}} type="text" placeholder="Enter your name here"/>
                        </div>
                        <div className="form-internal">
                            <label style={{width:'100%'}}>Email</label><br/>
                            <input style={{width:'100%',border:'1 solid black',height:'25px',padding:'5px'}} type="email" placeholder="Enter your email"/>
                        </div>
                        <div className="form-internal">
                            <label style={{width:'100%'}}>Message</label><br/>
                            <input style={{width:'100%',border:'1 solid black',height:'25px',padding:'5px'}} type="text" max="100" placeholder="Enter text ..."/>
                        </div>
                        <button className="form-btn">Submit</button>
                    </form>
                </Cell>
                <Cell col={2}></Cell>
            </Grid>
            <Grid style={{marginTop:'100px'}}></Grid>
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
export default About;