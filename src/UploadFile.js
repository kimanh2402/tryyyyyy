import React, { useState } from "react";
import Bg from '../src/images/bg.png'
import { Line } from "rc-progress";
import Upload from "rc-upload";
import { saveAs } from 'file-saver'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Round2 from "./Round2";
export default function UploadFile(prop) {
  
  const [percentage, setPercentage] = useState(0);
  const [imgData, setImgdata] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState();
  const [fileSize, setFileSize] = useState(); 
  
  const downloadImage = () => {
  alert('Saved')
    }

  const props = {
    action: "https://httpbin.org/post",
    accept: ".png, .pdf, .jpg",
    beforeUpload(file) {
      // Start upload
      setIsUploading(true);
      // Set file details
      setFileName(file.name);
      setFileSize(Math.floor(file.size / 1000));
      // Display image for .png format
      if ((file.type === "image/png") || (file.type === "image/jpg")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImgdata(reader.result);
        };
        reader.readAsDataURL(file);
      }
    },
    onSuccess() {
      // Finish upload
      setIsUploading(false);
    },
    onProgress(step) {
      // Update progress
      setPercentage(Math.round(step.percent));
    },
    onError(err) {
      console.log("onError", err);
    }
  };
   const gotoround2 =() =>{    
      ReactDOM.render(
      <BrowserRouter>
      <Round2 img={imgData}  score={prop.score}/>
        </BrowserRouter>,
    document.getElementById("root")
    );
      };
  return (
    <div style={{
        width: '1300px',
        height: '700px',
        background: `url(${Bg})`,
        backgroundColor: `black`,
        margin: `auto`,
        backgroundRepeat:'no-repeat',
        backgroundPosition: `center center`
    }} >
    <div className="App" style={{
        marginLeft: '200px',
        width: '70%',
        height: '70%',
        backgroundColor: `rgba(240, 145, 74, 0.517)`,
                backgroundPosition: `center`
        }}>
      {fileName && (
        <React.Fragment>
          {imgData && (
            <div>
              <img src={imgData} alt="uploaded" width="100" height="100" />
            </div>
          )}
          <center>
          <div className="upload-list">
            <div className="file-name">
              <b>{fileName}</b>
            </div>
            <div className="progress-container">
              <Line
                percent={percentage}
                strokeWidth={9}
                trailWidth={9}
                trailColor="#FFF"
                strokeColor={isUploading ? "#41C3D2" : "#92ed14"}
              />
              <div className="progress-text">
                {isUploading ? `Uploading ${percentage}% ` : `Finished` }
              </div>
              <div>
              </div>
            </div>
            <div className="file-size">{`${fileSize} KB`}</div>
            
          </div>
          </center>
          
        </React.Fragment>
      )}
    <br></br>
    <br></br>
    <br></br>
    <br></br>

      <Upload {...props} >
        <button id="upload-button">Upload File</button>
        {isUploading? '':<button onClick={downloadImage} style={{maginLeft: '50px'}}>Save</button>}
      </Upload>
      <br></br>
      <center><button id="user-submit" style={{ marginTop: '100px'}} onClick={gotoround2}>
        ROUND 2
        </button>
        </center>
    </div>
    </div>
  );
}