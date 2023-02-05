import styles from './style.module.css';
import File from './File';
import { useState , useContext} from 'react';
import FolderContext from '../../../Context/folder_context';



function Files() {


  const folderContext = useContext(FolderContext)


  return (
    <div className={styles.files}>
        <span className={styles.font}>קבצים</span>
        <p className={styles.list}>
        {!folderContext.openFile? folderContext.files.map(v => <File name={v} setOpenFile ={folderContext.setOpenFile} />): folderContext.openFile}
        
        </p>
        </div>
  )
}

export default Files;