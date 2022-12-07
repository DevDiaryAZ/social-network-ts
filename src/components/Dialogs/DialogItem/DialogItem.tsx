import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
    img: string
    time: string
    lastMessage: string
}

export const DialogItem = (props: PropsType) => {
    return (
        <div className={`${s.recipients__item}`}>
            <NavLink to={`/dialogs/${props.id}`} className={s.recipients__link}>
                <div className={s.recipients__avatar}>
                    <img src={props.img} alt="image"/>
                </div>
                <div className={s.recipients__itemContent}>
                    <div className={s.recipients__nameWrapper}>
                        <h6 className={s.recipients__name}>{props.name}</h6>
                        <p className={s.recipients__time}>{props.time}</p>
                    </div>
                    <p className={s.recipients__message}>{props.lastMessage}</p>
                </div>
            </NavLink>
        </div>
    )
}