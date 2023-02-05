import styles from './style.module.css';
import Folders from './Folders';
import Files from './Files';
import AppMain from './AppMain';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import FolderContext from '../../Context/folder_context';






function Main() {


  const [parents, setParents] = useState('')
  const [read, setread] = useState('root2')
  const [allFol, setAllFol] = useState([{ name: 'root2', isfolder: true }])
  const [folders, setFolders] = useState([])
  const [files, setFiles] = useState([])
  const [openFile, setOpenFile] = useState()

  
  useEffect(() => {
    setFolders([])
    setFiles([])
    // console.log(allFol);
    // console.log(parents)
    allFol.forEach(v=> v.isfolder? setFolders(oldfolders=> [...oldfolders,v.name]):setFiles(oldfiles=> [...oldfiles,v.name]))
  },[allFol])
  
  // console.log('folders: ' + folders+ ' files: ' + files);

  const obgContext= {
    setAllFol,
    allFol,
    folders,
    files,
    parents,
    setParents,
    read,
    setread,
    openFile,
    setOpenFile
  }
  
  return (
     <FolderContext.Provider value={{...obgContext}}>
    <main className={styles.main}>
        <AppMain/>
       <Folders/>
       <Files/>
    </main>
      </FolderContext.Provider>

  )
}

export default Main