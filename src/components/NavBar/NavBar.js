import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <p>Logo</p>
            <div className='menu'>
                <button>Home</button>
                <button>Tienda</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;

