import styles from './CartHeader.module.css'

const CartHeader = () =>{
    return (
        <>
        <div  className={styles.cart_head}>
             <h1 className={styles.cart_header}>YOUR BAG</h1>
        </div>
        </>
    )
}

export default CartHeader;