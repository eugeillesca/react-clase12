import CartWidget from './CartWidget';
import Brand from './Brand';
import Menu from './Menu';

const NavBar = () => {
    return (
        <>
            <nav className='navbar'>
                <Brand name="todo moda"/>
                <CartWidget cant="0"/>
            </nav>
            <Menu />
            {/* <ul>
            <MenuItem text="Zapatillas"></MenuItem>
            <MenuItem text="Botas"></MenuItem>
            <MenuItem text="Sandalias"></MenuItem>
            <MenuItem text="Ojotas"></MenuItem>
        </ul> */}
        </>
        )
    
}


export default NavBar;