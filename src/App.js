import { useState } from 'react';
import './App.css';
import Upload from './Components/Upload';
import Uploaded from './Components/Uploaded';
import Uploading from './Components/Uploading';

function App() {
  const [percentage,setUploadPercentage] = useState(0);
  const [time,setTime] = useState(0);
  const [url,setUrl] = useState(''); 
  return (
    <>
      {
        percentage>0
        ? 
        <Uploading time={time}/>
        : 
        url
        ?
        <Uploaded url={url}/>
        :
        <Upload setUploadPercentage={setUploadPercentage} setUrl={setUrl} setTime={setTime}/>
      }
    </>
  );
}

export default App;
