import './App.css';
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

function App() {
    return (
         <HashRouter>
            <div className="app">
                <Sidebar/>
                <div className="pageBody">
                    <Header/>
                    <main className="main">
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/dialogs" component={Dialogs}/>
                        <Route exact path="/news" component={News}/>
                        <Route exact path="/music" component={Music}/>
                        <Route exact path="/settings" component={Settings}/>
                    </main>
                </div>
            </div>
         </HashRouter>
    );
}

export default App;
