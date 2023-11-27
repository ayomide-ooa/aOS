import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as sd from "@fortawesome/free-solid-svg-icons"


const Filetools = () => {
    return (
        <div className="toolBar">
            <ul>
                <li>
                    <FontAwesomeIcon icon={sd.faCopy} /> Copy
                </li>
                <li>
                    <FontAwesomeIcon icon={sd.faCut} /> Cut
                </li>
                <li>
                    <FontAwesomeIcon icon={sd.faPaste} /> Paste
                </li>
                <li>
                    <FontAwesomeIcon icon={sd.faTrash} /> Delete
                </li>
                <li>
                    <FontAwesomeIcon icon={sd.faFolderPlus} /> New Folder
                </li>
                <li>
                    <FontAwesomeIcon icon={sd.faFileEdit} /> Text Editor
                </li>

            </ul>
        </div>
    )
}

export const Files = () => {
    return (
        <div className="folders">
            <span><FontAwesomeIcon icon={ sd.faFolder} />
            <p>Folder</p>
            </span>
        </div>
    )
}
export default Filetools;