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

                    <div className={s.recipients__list}>
                        <div className={s.recipients__item}>
                            <div className={s.recipients__avatar}>
                                <img src="https://pressa.tv/uploads/posts/2018-08/1535007604_9.jpg" alt="image"/>
                            </div>
                            <div className={s.recipients__itemContent}>
                                <div className={s.recipients__nameWrapper}>
                                    <h6 className={s.recipients__name}>Leonarda</h6>
                                    <p className={s.recipients__time}>5 minutes ago</p>
                                </div>
                                <p className={s.recipients__message}>Well, it seems to be working now.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Messages */}
            <div className={s.messages}>
                {/* Message header */}
                <div className={s.messages__user}>
                    <div className={s.messages__avatar}>
                        <img src="https://pressa.tv/uploads/posts/2018-08/1535007604_9.jpg" alt="image"/>
                    </div>
                    <div className={s.messages__itemContent}>
                        <div className={s.messages__nameWrapper}>
                            <h6 className={s.messages__name}>Leonarda</h6>
                            <p className={s.messages__time}>5 minutes ago</p>
                        </div>
                    </div>
                </div>

                {/* Message chat */}
                <div className={s.messages__chatContainer}>
                    <div className={s.messages__chatContent}>
                        <ul className={s.messages__chatsLists}>
                            <li className={s.messages__you}>
                                <div className={s.messages__chatThumb}>
                                    <img src="https://pressa.tv/uploads/posts/2018-08/1535007604_9.jpg" alt=""/>
                                </div>
                                <div className={s.messages__text}>
                                    <span>
                                    Hi, Peter, How are you today?.
                                    </span>
                                </div>
                            </li>
                            <li className={s.messages__me}>
                                <div className={s.messages__chatThumb}>
                                    <img src="https://lofficiel.imgix.net/production/russia/images/1531997317085199-b66a7d6e3d6f3d27fa5fd8531f8e8fe3.jpg?w=450&h=800&fit=clip&crop=faces&auto=%5B%22format%22%2C%20%22compress%22%5D&cs=srgb" alt=""/>
                                </div>
                                <div className={s.messages__text}>
                                    <span>
                                    Hi, Leo, I am fine but about you?
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Message form */}
                <form>
                    <div className={s.form__wrapper}>
                        <input type="text" className={`input ${s.form__input}`}/>
                        <button type="submit" className={`button button_blue ${s.form__button}`}>Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
}