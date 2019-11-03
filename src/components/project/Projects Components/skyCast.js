import React,{Component} from 'react';
import {Grid , Cell} from 'react-mdl';
import './style.css';

class Skycast extends Component{
    render(){
        return (
            <div className="mainContainer-in-project">
            <Grid className="title-grid">
                <Cell col={12}>
                    <div className="div-project" >SkyCast</div>
                </Cell>
            </Grid>
            <Grid>
                <Cell>
                <div className="content-div" style={{height:'auto',width:'100%'}}>
                        
                </div>
                </Cell>
            </Grid>
        </div>
        );
    }
}
export default Skycast;
