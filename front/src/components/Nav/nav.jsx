import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from './nav.module.css'
import {Link} from 'react-router-dom'

export default function Nav(props) {
  let onSearch = props.onSearch
   return (
      <div className={styles.bar}>
         <Link to="/about">ABOUT</Link>
         <Link to="/home" >HOME</Link>
          <SearchBar onSearch={onSearch} />
      </div>
   );
}