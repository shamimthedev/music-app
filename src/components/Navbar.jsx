import { Heart, Home, ListMusic, Search } from 'lucide-react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <nav className='w-full h-[100px] bg-black text-white flex items-center justify-between md:justify-center gap-12 fixed bottom-0 md:top-0 px-10'>
            <Link to={'/'}> <Home size={25} /> </Link>
            <Link to={'search'}> <Search size={25} /> </Link>
            <Link to={'playlist'}> <ListMusic size={25} /> </Link>
            <Link to={'liked'}> <Heart size={25} /> </Link>
        </nav>
    )
}

export default Navbar