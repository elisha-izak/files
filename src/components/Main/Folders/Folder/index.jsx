import styles from './style.module.css';
import {AiFillFolderOpen} from 'react-icons/ai'
import { useState, useContext } from 'react';
import FolderContext from '../../../../Context/folder_context';
import axios from 'axios';



function Folder({name}) {


  const folderContext = useContext(FolderContext)

  const readFolder = async ()=>{
    const path = folderContext.parents? folderContext.parents + name: name;
    await axios.post('http://localhost:3122/api/folders/',{fold: path})
    .then(res => folderContext.setAllFol(res.data))
    folderContext.setParents(folderContext.parents? folderContext.parents + name + '/': name + '/')
  }


  return (
    <span className={styles.folder} onDoubleClick ={readFolder}>
        <AiFillFolderOpen className= {styles.icon}/>
        <br />
        {name}
        </span>
  )
}

export default Folder;