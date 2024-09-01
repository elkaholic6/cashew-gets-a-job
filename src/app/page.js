import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Book from './components/Book';
import CashewInSpace from './components/CashewInSpace';



export default async function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Book />
            <CashewInSpace />
            {/* <ProductList products={data.products}/> */}
        </div>
    )
}
