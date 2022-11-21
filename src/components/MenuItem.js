import { Link, NavLink } from 'react-router-dom'

const MenuItem = ({name}) => {
    return(
        <li>
             <Link to={`/category/${name}`}>{name}</Link>
            {/* <NavLink to={`/category/${name}`}>{name}</NavLink> */}


            {/* <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to={`/category/${name}`}
            >
             {name}
            </NavLink> */}
        </li>
    );
}

export default MenuItem;