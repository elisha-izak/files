import styles from './style.module.css';
import {BiFile} from 'react-icons/bi'
import { useState, useContext } from 'react';
import FolderContext from '../../../../Context/folder_context';
import axios from 'axios';




function File({name, setOpenFile}) {

  const folderContext = useContext(FolderContext)

  const readFile = async ()=>{
    const path = folderContext.parents? folderContext.parents + name: name;
    await axios.post('http://localhost:3122/api/files/',{file: path})
    .then(res => setOpenFile(res.data))
    folderContext.setAllFol([])
    folderContext.setParents(folderContext.parents? folderContext.parents + name + '/': name + '/')
  }


  return (
    <span className={styles.file} onDoubleClick ={readFile}>
        <BiFile className= {styles.icon}/>
        <br />
        {name}
        </span>
  )
}

export default File