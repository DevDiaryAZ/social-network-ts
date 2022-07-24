import s from './../css/Sidebar.module.css'

export const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <div className={s.sidebar__wrapper}>
                <div className={s.sidebar__navCategory}>
                    <span className={s.sidebar__navLink}>Navigation</span>
                </div>
                <ul className={s.sidebar__nav}>
                    <li className={`${s.sidebar__navItem} ${s.active}`}>
                        <a className={s.sidebar__navLink} href="#">
                            <span className={s.sidebar__menuIcon}>
                                <i className={`${s.mdi} ${s.mdiAccount}`}></i>
                            </span>
                            <span className={s.sidebar__menuTitle}>Profile</span>
                        </a>
                    </li>
                    <li className={s.sidebar__navItem}>
                        <a className={s.sidebar__navLink} href="#">
                            <span className={s.sidebar__menuIcon}>
                                <i className={`${s.mdi} ${s.mdiCommentOutline}`}></i>
                            </span>
                            <span className={s.sidebar__menuTitle}>Messages</span>
                        </a>
                    </li>
                    <li className={s.sidebar__navItem}>
                        <a className={s.sidebar__navLink} href="#">
                            <span className={s.sidebar__menuIcon}>
                                <i className={`${s.mdi} ${s.mdiWindowMaximize}`}></i>
                            </span>
                            <span className={s.sidebar__menuTitle}>News</span>
                        </a>
                    </li>
                    <li className={s.sidebar__navItem}>
                        <a className={s.sidebar__navLink} href="#">
                            <span className={s.sidebar__menuIcon}>
                                <i className={`${s.mdi} ${s.mdiMusicNote}`}></i>
                            </span>
                            <span className={s.sidebar__menuTitle}>Music</span>
                        </a>
                    </li>
                    <li className={s.sidebar__navItem}>
                        <a className={s.sidebar__navLink} href="#">
                            <span className={s.sidebar__menuIcon}>
                                <i className={`${s.mdi} ${s.mdiSettings}`}></i>
                            </span>
                            <span className={s.sidebar__menuTitle}>Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}