import React,{Component} from 'react';
import {Grid , Cell} from 'react-mdl';
import './style.css';

class ExamMS extends Component{
    render(){
        return (
            <div className="mainContainer-in-project">
            <Grid className="title-grid">
                <Cell col={12}>
                    <div className="div-project" >Exam Management System</div>
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
export default ExamMS;
