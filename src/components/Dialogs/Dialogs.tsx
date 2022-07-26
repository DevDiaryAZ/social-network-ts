import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <section className={s.dialogs}>
            {/* Dialogs */}
            <div className={s.dialogsBody}>
                <div className={s.searchContainer}>
                    <input className={s.searchInput} type="text" placeholder="Search"
                          />
                    <button className={`button ${s.searchButton}`}><i className={`mdi ${s.mdiAccountSearch}`}></i></button>
                </div>

                <div className="user-recipients-container">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <i className="tabUser"></i>Users
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="tabGroups"></i>Groups
                            </a>
                        </li>
                    </ul>

                    <div className="user-recipients-list">
                        <div className="user-recipients">
                            <div className="recipient-avatar">
                                <img src="/" alt=""/>
                                <div className="presence-entity">
                                            <span className="visually-hidden">
                                                Status is online
                                            </span>
                                </div>
                            </div>
                            <div className="right-part">
                                <div className="last-sent" title="1 w">15m</div>
                                <span className="user-recipient-name">Jassica William</span>
                                <p> contact me on my email address i sent to you so that i can tell you
                                    more about myself</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Messages */}
            <div className={s.messagesBody}>
            </div>
        </section>
    )
}