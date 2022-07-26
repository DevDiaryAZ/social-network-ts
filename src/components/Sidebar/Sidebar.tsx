import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <div className={s.sidebar__wrapper}>
                <div className={s.sidebar__brandWrapper}>
                    <NavLink className={s.sidebar__brand} to="/profile">
                        Blogbook
                    </NavLink>
                </div>
                <div className={s.sidebar__navCategory}>
                    <span className={s.sidebar__navLink}>Navigation</span>
                </div>
                <ul className={s.sidebar__nav}>
                    <li className={s.sidebar__navItem}>
                        <NavLink activeClassName={s.active} className={s.sidebar__navLink} to="/profile">
                            <span className={s.sidebar__menuIcon}>
                                <i className={`${s.mdi} ${s.mdiAccount}`}></i>
                            </span>
                            <span className={s.sidebar__menuTitle}>Profile</span>
                        </NavLink>
                    </li>
                    <li className={s.sidebar__navItem}>
                        <NavLink activeClassName={s.active}  className={s.sidebar__navLink} to="/dialogs">
                            <span className={s.sidebar__menuIcon}>
                                <i className={`${s.mdi} ${s.mdiCommentOutline}`}></i>
                            </span>
                            <span className={s.sidebar__menuTitle}>Messages</span>
                        </NavLink>
                    </li>
                    <li className={s.sidebar__navItem}>
                        <NavLink activeClassName={s.active} className={s.sidebar__navLink} to="/news">
                            <span className={s.sidebar__menuIcon}>
                                <i className={`${s.mdi} ${s.mdiWindowMaximize}`}></i>
                            </span>
                            <span className={s.sidebar__menuTitle}>News</span>
                        </NavLink>
                    </li>
                    <li className={s.sidebar__navItem}>
                        <NavLink activeClassName={s.active} className={s.sidebar__navLink} to="/music">
                            <span className={s.sidebar__menuIcon}>
                                <i className={`${s.mdi} ${s.mdiMusicNote}`}></i>
                            </span>
                            <span className={s.sidebar__menuTitle}>Music</span>
                        </NavLink>
                    </li>
                    <li className={s.sidebar__navItem}>
                        <NavLink activeClassName={s.active} className={s.sidebar__navLink} to="/settings">
                            <span className={s.sidebar__menuIcon}>
                                <i className={`${s.mdi} ${s.mdiSettings}`}></i>
                            </span>
                            <span className={s.sidebar__menuTitle}>Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}