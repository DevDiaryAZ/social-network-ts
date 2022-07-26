import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";

export const Profile = () => {
    return (
        <section className={s.profile}>
            <div className={s.profile__wrapper}>
                <Posts/>
            </div>
        </section>
    )
}