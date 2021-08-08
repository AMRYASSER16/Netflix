import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';
import './Home.scss';

const Home = () => {
    return <div className='home'>
        <NavBar />
        <Featured />
        <div style={{paddingBottom:'20px'}}>
            <List />
            <List />
            <List />
            <List />
        </div>
    </div>;
}

export default Home;