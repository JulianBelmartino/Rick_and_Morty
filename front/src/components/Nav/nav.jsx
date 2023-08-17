import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from './nav.module.css'
import {Link} from 'react-router-dom'

export default function Nav(props) {
  let onSearch = props.onSearch
   return (
      <div className={styles.bar}>
        <img className={styles.logo} src="./logo.png" />
         <div className={styles.linkBar}>
         <Link className={styles.linkNav} to="/about">ABOUT</Link>
         <Link className={styles.linkNav} to="/home" >HOME</Link>
         </div>
         <div  className={styles.search} >
          <SearchBar onSearch={onSearch} />
          </div>
      </div>
   );
}