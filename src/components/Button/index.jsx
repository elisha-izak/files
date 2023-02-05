import styles from './style.module.css'

function Button({children}) {
  return (
    <button className={styles.btn}> {children} </button>
  )
}

export default Button