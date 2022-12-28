import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange(event) {
        const {name,value} = event.target;
        setNote((prevValues) => {
            return {
                ...prevValues,
               [ name ]: value
            }

        })
    }

    function expand(){
        setIsExpanded(true);
    }

    return (
        <div>
            <form>
                {isExpanded && <input name="title" placeholder="Title" value={note.title} onChange={handleChange} required/>}
                <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3: 1} value={note.content} onChange={handleChange} onClick={expand}/>
                <Zoom in={isExpanded}>
                    <button onClick={(event) => {
                        props.onAdd(note)
                        setNote({title :"",content :""})
                        event.preventDefault();
                        setIsExpanded(false)
                    }}><AddIcon/></button>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
