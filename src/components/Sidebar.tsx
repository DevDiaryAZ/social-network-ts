export const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="sidebar__wrapper">
                <div className="sidebar__navCategory">
                    <span className="sidebar__navLink">Navigation</span>
                </div>
                <ul className="sidebar__nav">
                    <li className="sidebar__navItem active">
                        <a className="sidebar__navLink" href="#">
                            <span className="sidebar__menuIcon">
                                <i className="mdi mdiAccount"></i>
                            </span>
                            <span className="sidebar__menuTitle">Profile</span>
                        </a>
                    </li>
                    <li className="sidebar__navItem">
                        <a className="sidebar__navLink" href="#">
                            <span className="sidebar__menuIcon">
                                <i className="mdi mdiCommentOutline"></i>
                            </span>
                            <span className="sidebar__menuTitle">Messages</span>
                        </a>
                    </li>
                    <li className="sidebar__navItem">
                        <a className="sidebar__navLink" href="#">
                            <span className="sidebar__menuIcon">
                                <i className="mdi mdiWindowMaximize"></i>
                            </span>
                            <span className="sidebar__menuTitle">News</span>
                        </a>
                    </li>
                    <li className="sidebar__navItem">
                        <a className="sidebar__navLink" href="#">
                            <span className="sidebar__menuIcon">
                                <i className="mdi mdiMusicNote"></i>
                            </span>
                            <span className="sidebar__menuTitle">Music</span>
                        </a>
                    </li>
                    <li className="sidebar__navItem">
                        <a className="sidebar__navLink" href="#">
                            <span className="sidebar__menuIcon">
                                <i className="mdi mdiSettings"></i>
                            </span>
                            <span className="sidebar__menuTitle">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}