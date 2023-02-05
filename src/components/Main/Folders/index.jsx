import styles from './style.module.css';
import Folder from './Folder';
import { useState , useContext} from 'react';
import FolderContext from '../../../Context/folder_context';



function Folders() {


   const folderContext = useContext(FolderContext)
  

    return (
      <div className={styles.folders}>
        <span className={styles.font}>תיקיות</span>
        <p className={styles.list}>
        {folderContext.folders.map(v => <Folder name={v}/>)}
        </p>
        </div>
    )
  }
   
  export default Folders;