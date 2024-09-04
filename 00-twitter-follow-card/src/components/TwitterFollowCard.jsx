import '/src/style/TwitterFollowCard.css'
import {useState} from "react"

export function TwitterFollowCard({ children, formatUserName, userName = 'default_Value', name, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState({initialIsFollowing})
    const [isHovered, setIsHovered] = useState(false)

    const text = isFollowing
        ? isHovered
            ? 'Unfollow'
            : 'Following'
        : 'Follow'

    const buttonClassName = isFollowing
        ? 'tw-follow-card-button-is-following'
        : 'tw-follow-card-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className={"tw-follow-card"}>
            <header className={"tw-follow-card-header"}>
                <img
                    className={"tw-follow-card-avatar"}
                    alt="avatar"
                    src={`https://unavatar.io/x/${userName}`}/>
                <div className={"tw-follow-card-info"}>
                    <strong className={"tw-follow-card-userName"}>{name} {children}</strong>
                    <span className={"tw-follow-card-infoUsername"}>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button
                    className={buttonClassName}
                    onClick={handleClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    {text}
                </button>
            </aside>
        </article>
    )
}