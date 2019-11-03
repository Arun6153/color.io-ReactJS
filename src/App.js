import React from 'react';
import './App.css';
import {Layout ,Header ,Textfield ,Drawer ,Navigation ,Content} from 'react-mdl';
import MainRoute from './components/main-route';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

function App() {
    return ( 
        <div className="demo-big-content">
        <Layout fixedHeader>
            <Header title="color.io" style={{backgroundColor: '#20232a',color:'#61dafb'}}>
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
                    <Link className="main-link" to="/contact/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <BrowserRouter/>
                <MainRoute/>
            </Content>
        </Layout>
    </div>
    );
}

export default App;