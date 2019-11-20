import React,{Component} from 'react';
import {Grid , Cell} from 'react-mdl';
import './style.css';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            message:"",
            checkForm:"",
            checkBool:false
        }
        // this.nameHandler = this.nameHandler.bind(this);
        // this.emailHandler = this.emailHandler.bind(this);
        // this.messageHandler = this.messageHandler.bind(this);
    }
    sendMessage = () =>{
        
        // let [ name , email , message] = this.state;
        if(this.state.name !== "" && this.state.email !== "" && this.state.message !== "")
        {
            console.log("Hey");
            this.setState({checkForm:"Your message has been sent! Now relax.",checkBool:true});
        }
        else{
            this.setState({checkForm:"Form has'nt filled correctly!",checkBool:false});
        }
    }
    nameHandler = (val) =>{
        let v = val.target.value;
        this.setState({name : v})
    }
    emailHandler = (val) =>{
        let v = val.target.value;
        this.setState({email : v})
    }
    messageHandler = (val) =>{
        let v = val.target.value;
        this.setState({ message : v})
    }
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
                            Arun Saini is a Dev[ Developer ] and Programmer. He is currently pursuing his Computer Science Bachelors degree in an Indian University. I am Specialized in full Stack web Developement and some Video Editing. 
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
                            <input style={{width:'100%',border:'1 solid black',height:'25px',padding:'5px'}} type="text"  onChange={this.nameHandler} value={this.state.name} placeholder="Enter your name here"/>
                        </div>
                        <div className="form-internal">
                            <label style={{width:'100%'}}>Email</label><br/>
                            <input style={{width:'100%',border:'1 solid black',height:'25px',padding:'5px'}} type="email" onChange={this.emailHandler} value={this.state.email} placeholder="Enter your email"/>
                        </div>
                        <div className="form-internal">
                            <label style={{width:'100%'}}>Message</label><br/>
                            <input style={{width:'100%',border:'1 solid black',height:'25px',padding:'5px'}} type="text" max="100" onChange={this.messageHandler} value={this.state.message} placeholder="Enter text ..."/>
                        </div>
                        <div style={{color:(this.state.checkBool)? "green":"red"}}>{this.state.checkForm}</div>
                        <button type="button" onClick={this.sendMessage} className="form-btn">Submit</button>
                    </form>
                </Cell>
                <Cell col={2}></Cell>
            </Grid>
        </div>
        );
    }
}
export default About;