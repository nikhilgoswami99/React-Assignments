import styles from './nav.module.css'

function Navbar()
{
    return <>
    <nav className={styles.navbar}>
        <p className={styles.navbar_heading}>Bank of React</p>
    </nav>
    </>
}

export default Navbar