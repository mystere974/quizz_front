import { Link } from 'react-router-dom'

const Home = () => {
    return (
        
        <div className="home">
            <h1>Tu veux tester tes connaissances Geek?</h1>
            <Link to='/content'>
            <button>C'est par ici</button>
            </Link>
        </div>
        
    )
}

export default Home
