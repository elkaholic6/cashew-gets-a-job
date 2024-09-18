import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Book from './components/Book';
import Roadmap from './components/Roadmap';
import Reviews from './components/Reviews';
import BookPages from './components/BookPages';
import NFTSection from './components/NFTSection';
import Team from './components/Team';
import Footer from './components/Footer';



export default async function Home() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Hero />
                <Book />
                <Reviews />
                <BookPages />
                <Team />
                {/* <Roadmap /> */}
                <NFTSection />
                <Footer />
            </div>
            
        </div>
    )
}
