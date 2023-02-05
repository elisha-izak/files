import styles from './style.module.css'
import {AiFillAlert} from 'react-icons/ai'

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.bsd}>בס"ד</span>
        {/* <p className={styles.companyName}><AiFillAlert/></p> */}
        <span className={styles.ELIdrive}>ELIdrive</span>
    </header>
  )
}

export default Header