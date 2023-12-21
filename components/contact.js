import Social from 'components/social'
import styles from 'styles/container.module.css'

export default function Contact () {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social />
      <address>cube@web.mail.address</address>
    </div>
  )
}
