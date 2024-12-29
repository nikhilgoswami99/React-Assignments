import styles from './Footer.module.css'

const Footer = (props) =>{

    const onClickClear = () =>{
        props.setTotalPrice(0);
        props.setClear(true);
    }
    return (
        <>
      <div className={styles.footer}>
      <div className={styles.top}>
            <div>
                <h3 className={styles.Total}>Total</h3>
            </div>
            <div className={styles.total}>
                <p className={styles.price}>$ {props.totalPrice} </p>
            </div>
        </div>
        <div className={styles.button_box}>
            <button onClick={onClickClear} className={styles.clear}>Clear Cart</button>
        </div>
      </div>
        </>
    )
}

export default Footer;