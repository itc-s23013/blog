import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

export default function Social ({ iconSize = 'initial' }) {
  return (
    <ul className={styles.list} style={{ '--icon-size': iconSize }}>
      <li>
        <a href='http://twitter.com/'>
          <FontAwesomeIcon icon={faTwitter} />
          <span className='sr-only'>Twitter</span>
        </a>
      </li>
      <li>
        <a href='http://www.facebook.com/'>
          <FontAwesomeIcon icon={faFacebookF} />
          <span className='sr-only'>Facebook</span>
        </a>
      </li>
      <li>
        <a href='http://www.github.com/'>
          <FontAwesomeIcon icon={faGithub} />
          <span className='sr-only'>GitHub</span>
        </a>
      </li>
    </ul>
  )
}
