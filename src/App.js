import React from 'react';
import './App.css';
import {Layout ,Header ,Textfield ,Drawer ,Navigation ,Content ,Cell ,Grid} from 'react-mdl';
import MainRoute from './components/main-route';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

function App() {
    return ( 
        <div className="demo-big-content">
        <Layout fixedHeader>
            <Header title="GrayScale" style={{backgroundColor: '#20232a',color:'#61dafb'}}>
                <Navigation>
                    <Link className="main-link" to="/">Home</Link>
                    <Link className="main-link" to="/skill/skill">Skills</Link>
                    <Link className="main-link" to="/about/about">About</Link>
                </Navigation>
                <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search"
                    expandable
                    expandableIcon="search"
                />
            </Header>
            <Drawer title="Menu">
                <Navigation>
                <Link className="main-link" to="/">Home</Link>
                    <Link className="main-link" to="/project/project">Projects</Link>
                    <Link className="main-link" to="/skill/skill">Skills</Link>
                    <Link className="main-link" to="/about/about">About</Link>
                </Navigation>
            </Drawer>
            <Content>
                <BrowserRouter/>
                <MainRoute/>
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
            </Content>
        </Layout>
    </div>
    );
}

export default App;