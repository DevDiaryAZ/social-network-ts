import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";

export const Dialogs = () => {

    let dialogsData = [
        {
            id: 1,
            name: "Leonarda Ore",
            avatar: "https://slepayakurica.ru/local/img/b/150121/di_opt.jpg",
            absenceTime: "10 Minutes Ago",
            lastMessage: "Please review the tickets"
        },
        {
            id: 2,
            name: "Anna Mills",
            avatar: "https://pressa.tv/uploads/posts/2018-08/1535007604_9.jpg",
            absenceTime: "5 minutes ago",
            lastMessage: "Well, it seems to be working now."
        },
        {
            id: 3,
            name: "Isabel May",
            avatar: "https://www.zastavki.com/pictures/1600x1200/2020Girls___Models_Beautiful_face_close-up__model_Barbara_Palvin_144354_2.jpg",
            absenceTime: "4 Hours Ago",
            lastMessage: "Thanks a lot. It was easy to fix it ."
        },
    ]

    return (
        <section className={s.dialogs}>
            <div className={s.dialogsBody}>
                {/* Dialogs search*/}
                <div className={s.search}>
                    <input className={s.searchInput} type="text" placeholder="Search"
                    />
                    <button className={`button button_blue ${s.searchButton}`}><i
                        className={`mdi ${s.mdiAccountSearch}`}></i></button>
                </div>

                <div className={s.recipients}>
                    {/* Dialogs buttons*/}
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

                    {/* Dialogs list*/}
                    <div className={s.recipients__list}>
                        {dialogsData.map((dialog) => <DialogItem id={dialog.id} img={dialog.avatar}
                                                                 name={dialog.name} time={dialog.absenceTime}
                                                                 lastMessage={dialog.lastMessage}/>
                        )}
                    </div>
                </div>

            </div>

            <Messages/>
        </section>
    )
}