import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='navBar'>
            <p>Logo</p>
            <div className='menu'>
                <button>Home</button>
                <button>Tienda</button>
                <button>Contacto</button>
            </div>
            <p>Carrito</p>
        </nav>
    )
}

export default NavBar;

