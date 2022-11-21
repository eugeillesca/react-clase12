import { Link } from 'react-router-dom'

const CartWidget = (props) => {
    return (
      <>
      <div className="divnotification" >
          <Link className="notification" to='/cart'>
              <i className="fa fa-shopping-cart"></i>
              {props.cant>0 && <span className="badge">{props.cant}</span>}
          </Link>
      </div>
      </>
      
  )


}

export default CartWidget;