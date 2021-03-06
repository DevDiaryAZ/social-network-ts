import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Sidebar/>
                <div className="pageBody">
                    <Header/>
                    <main className="main">
                        <Route path="/profile" component={Profile}/>
                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
