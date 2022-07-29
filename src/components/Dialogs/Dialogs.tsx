import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <section className={s.dialogs}>
            {/* Dialogs */}
            <div className={s.dialogsBody}>
                <div className={s.search}>
                    <input className={s.searchInput} type="text" placeholder="Search"
                    />
                    <button className={`button button_blue ${s.searchButton}`}><i
                        className={`mdi ${s.mdiAccountSearch}`}></i></button>
                </div>

                <div className={s.recipients}>
                    <div className={s.recipients__nav}>
                        <div className={s.recipients__navItem}>
                            <button className={`button btn_dark ${s.recipients__button}`}>
                                <span><i className={`mdi ${s.mdiAccountMultiple}`}></i>Users</span>
                            </button>
                        </div>
                        <div className={s.recipients__navItem}>
                            <button className={`button btn_outlineDark ${s.recipients__button}`}>
                                <span><i className={`mdi ${s.mdiAccount}`}></i>Groups</span>
                            </button>
                        </div>
                    </div>

                    <div className="recipients-list">
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

            {/* Messages */}
            <div className={s.messagesBody}>
            </div>
        </section>
    )
}