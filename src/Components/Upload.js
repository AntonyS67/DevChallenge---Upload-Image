import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, FileInput, Form, InputDiv } from '../ui/UploadImage';


function Upload({setUploadPercentage,setUrl,setTime}) {
    const [dragging,setDragging] = useState(false);
    const [dragCounter,setDragCounter] = useState(0);
    const dropRef = React.createRef();
    const url = "https://api.cloudinary.com/v1_1/dpb53nq0u/image/upload";

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    const handleDragIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter(dragCounter+1);
        if(e.dataTransfer.items && e.dataTransfer.items.length > 0){
            setDragging(true);
        }
    }
    const handleDragOut = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter(dragCounter-1);
        if(dragCounter > 0 ) return dragging;
        setDragging(false);
    }
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        if(e.dataTransfer.files && e.dataTransfer.files.length > 0){
            console.log(e.dataTransfer.files);
            uploadImage(e.dataTransfer.files);
            e.dataTransfer.clearData();
            setDragCounter(0);
        }
    }

    useEffect(() => {   
        let div = dropRef.current;
        div.addEventListener('dragenter', handleDragIn)
        div.addEventListener('dragleave', handleDragOut)
        div.addEventListener('dragover', handleDrag)
        div.addEventListener('drop', handleDrop)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dropRef]);


    
    const uploadImage = async files => {
        const formData = new FormData();
        formData.append("file",files[0]);
        formData.append("upload_preset","ml_default");
        try {
            const res = await axios.post(url,formData,{
                onUploadProgress:progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded*100)/progressEvent.total)));
                    setTime(parseInt(progressEvent.total));
                    setTimeout(() => {
                        setUploadPercentage(0);
                    }, 10000);
                }
            });
            console.log(res);
            setUrl(res.data.url);
        } catch (error) {
            console.error(error)
        }
    };
    return (
        <Container>
            <Form enctype="multipart/form-data" method="POST">
                <h2>Upload your image</h2>
                <p>File should be Jpeg, Png...</p>
                <InputDiv ref={dropRef}>
                    <img src="./images/image.jpg" alt="file drag"/>
                    <p>Drag and Drop your image here</p>
                </InputDiv>
                <p>Or</p>
                <FileInput>
                    <input type="file" name="file" id="file" onChange={e => uploadImage(e.target.files)}/>
                    Choose a File
                </FileInput>
            </Form>
        </Container>
    )
}

export default Upload
