import React, { useState } from 'react'
import { Check, ContainerImage, ContainerLink, ContainerUploaded,LinkCopied,Href } from '../ui/Uploaded';

function Uploaded({url}) {
    const [copied,setCopied] = useState(false);

    const handleCopy = () => {
        let linkToCopy = document.getElementById('link');
        let selection = document.createRange();
        selection.selectNodeContents(linkToCopy);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(selection);
        let res = document.execCommand('copy');
        window.getSelection().removeRange(selection);
        if(res){
            setCopied(res);
        }
        setTimeout(()=>{
            setCopied(false);
        },5000);
    }

    return (
        <ContainerUploaded>
            <Check>
                <i className="fas fa-check"></i>
            </Check>
            <h2>Uploaded Successfully!</h2>
            <ContainerImage>
                <img src={url} alt="from cloudinary"/>
            </ContainerImage>
            <ContainerLink>
                <p id="link">{url}</p>
                <button type="button" onClick={handleCopy}>Copy Link</button>
            </ContainerLink>
            <Href href="/">Upload new file</Href>
            {copied &&
                <LinkCopied>Enlace Copiado</LinkCopied>
            }
        </ContainerUploaded>
    )
}

export default Uploaded
