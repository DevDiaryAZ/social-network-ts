import s from "../Dialogs.module.css";

export const Messages = (props: any) => {
    return (
        <div className={s.messages}>
            {/* Messages header */}
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

            {/* Messages chat */}
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
                                <img
                                    src="https://n1s2.hsmedia.ru/63/4b/22/634b22e2c742e056c4756c749f6ceab5/2832x4256_0xac120003_16067739081627306764.jpg"
                                    alt=""/>
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

            {/* Messages form */}
            <form>
                <div className={s.form__wrapper}>
                    <input type="text" className={`input ${s.form__input}`}/>
                    <button type="submit" className={`button button_blue ${s.form__button}`}>Send</button>
                </div>
            </form>
        </div>
    )
}