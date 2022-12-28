import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [items, setItems] = useState([])

    function handleAddition(note){
        setItems((prevValues)=>{
            return [
                ...prevValues,
                note
            ];
        });
    }

    function handleDeletion(id){
        setItems((prevValues)=>{
            return (prevValues.filter((item,index)=>{
                return id !== index;
            }))
        })
    }

    return (
        <div>
            <Header />
            <CreateArea
                onAdd = {handleAddition}
            />

            {
                items.map((item, index) => {
                    return (
                        <Note
                            key={index}
                            id={index}
                            title = {item.title}
                            content = {item.content}
                            onSubmission={handleDeletion}
                        />
                    )
                })
            }
            <Footer />
        </div>
    );
}

export default App;