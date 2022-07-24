import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {Profile} from "./components/Profile";

function App() {
    return (
        <div className="app">
            <Sidebar/>
            <div className="pageBody">
                <Header/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
