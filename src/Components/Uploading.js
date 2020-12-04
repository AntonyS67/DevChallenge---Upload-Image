import React, { useEffect } from 'react'
import { Loading,ProgressLoading } from '../ui/Loading';

function Uploading({time}) {
    useEffect(() => {
        const load = () => {
            let i = 0;
            if(i === 0){
                let elem = document.getElementById('progressBar');
                let width = 0;
                let id = setInterval(() => {
                    if(width >= 100){
                        clearInterval(id);
                        i = 0;
                    }else{
                        width = width + 0.1;
                        elem.style.width = width + '%';
                    }
                },time);
            }
        }
        load();
    },[time])
    return (
        <Loading>
            <p>Uploading...</p>
            <ProgressLoading>
                <div id="progressBar">
                </div>
            </ProgressLoading>
        </Loading>
    )
}

export default Uploading
