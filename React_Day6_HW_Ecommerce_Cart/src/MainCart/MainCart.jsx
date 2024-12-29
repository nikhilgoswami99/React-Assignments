import styles from './MainCart.module.css'
import Card from '../Card/Card'

const MainCart = (props) =>{
    // console.log(props);
    
   
    return (
        <>
          <Card {...props} />
        </>
    )
}

export default MainCart;