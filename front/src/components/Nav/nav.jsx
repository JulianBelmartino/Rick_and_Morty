import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from './nav.module.css'


export default function Nav(props) {
  let onSearch = props.onSearch
   return (
      <div className={styles.bar}>
          <SearchBar onSearch={onSearch} />
      </div>
   );
}