import { useState } from "react";


export const TwitterFollowCard = ({usersName, children, initialIsFollowing}) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const btnClassName = isFollowing 
        ? 'tw-followCard-btn is-following'
        : 'tw-followCard-btn';

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${usersName}`} 
                    alt="midu" />
                <div className='tw-followCard-inf'>
                    <strong>{children}</strong>
                    <span>@{usersName}</span>
                </div>
            </header>

            <aside>
                <button onClick={handleClick} className={btnClassName}>
                    <span className="tw-followBtn-text">{text}</span>
                    <span className="tw-follow-card-StopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
