import styles from './style.module.css';
import FolderContext from '../../../Context/folder_context';
import { useContext } from 'react';
import axios from 'axios';
import {AiFillFolderOpen} from 'react-icons/ai'




function AppMain() {

  const folderContext = useContext(FolderContext)

  let parents;
   folderContext.parents? parents= folderContext.parents.split('/'):parents=folderContext.parents;

  
  
  

   const mainFolder = ()=>{
    folderContext.setAllFol([{ name: 'root2', isfolder: true }])
    folderContext.setParents('')
    folderContext.setOpenFile('')
   }


  const returnFolder = async (index)=>{
    console.log(index);
    let path = parents.slice(0,index+1).join('/')+'/';
      console.log(path);
      await axios.post('http://localhost:3122/api/folders/',{fold: path})
      .then(res => folderContext.setAllFol(res.data))
      folderContext.setParents(path)
      folderContext.setOpenFile('')
  }

  return (
    <div className={styles.appmain}>
      <span onClick={mainFolder}>folders</span>
       <span>/</span>
      {parents? parents.map((v,i)=> i<parents.length-2?
       <> <span onClick={()=> returnFolder(i)}>{v}</span> <span>/</span> </> :
       i===parents.length-2? <><span>{v}</span> <span>/</span></> :
       v):
       <></>}

       <ul className={styles.taskbar}><li className={styles.creatFolder}><AiFillFolderOpen className= {styles.iconFolder}/></li></ul>
    </div> 
  )
}

export default AppMain