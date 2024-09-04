import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

const formatUserName = (userName) => `@${userName}`

const users = [
    {
        userName: 'cesar',
        name: 'Cesar Ocampo',
        isFollowing: true
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: false
    },
    {
        name: 'Daniel',
        isFollowing: false
    }
]

export function TwitterApp () {
    return (
        <section className="main-section">
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName} // Use a unique identifier
                            userName={userName}
                            initialIsFollowing={isFollowing}
                            name={name}
                            formatUserName={formatUserName}>
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}