import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Book from './components/Book';
import Roadmap from './components/Roadmap';
import Reviews from './components/Reviews';
import NFTs from './components/NFTs';



export default async function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Book />
            <Reviews />
            <NFTs />
            <Roadmap />
        </div>
    )
}
