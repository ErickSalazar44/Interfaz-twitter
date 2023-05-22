import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'
const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true,
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false,
    },
    {
        userName: 'ericksalazar',
        name: 'Erick Salazar',
        isFollowing: true,
    },
]

const App = () => {
    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        usersName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )) 
            }
        </section>
    )
}

export default App