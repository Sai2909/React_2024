import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';

const ImageToTextConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputText, setOutputText] = useState('');
  const [progressStatus, setProgressStatus] = useState('');

  const processImage = async (file) => {
    setProgressStatus('');

    // Preview Image
    const src = URL.createObjectURL(file);
    document.getElementById('image').src = src;

    try {
      const { data } = await Tesseract.recognize(file, 'eng', {
        logger: (info) => {
          console.log(info);
          setProgressStatus(info.status);
        },
      });

      console.log(data.text);
      setOutputText(data.text);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    processImage(file);
  };

  return (
    <div className="ui container">
      <h1 className="ui header">Image to Text</h1>
      <div className="desc">Extract all the text from a selected image using Tesseract OCR engine.</div>

      <div className="ui grid stackable">
        <div className="row">
          <div className="eight wide column">
            <div className="ui card">
              <div className="content">
                <h2 className="header">Input</h2>
              </div>
              <div className="content">
                <img id="image" className="ui centered medium image" src="http://www.brainstormerbingo.com/Images/upload-empty.png" alt="Preview" />
              </div>
              <div className="content extra">
                <input id="file" type="file" onChange={handleFileChange} />
              </div>
            </div>
          </div>

          <div className="eight wide column">
            <div className="ui card">
              <div className="content">
                <h2 className="header">Output</h2>
              </div>
              <div className="content content-result">
                <div className="ui grid">
                  <div className="row result">
                    <div className="column placeholder">
                      {progressStatus ? (
                        <>
                          <div className="status ten wide column">{progressStatus}</div>
                          <div className="six wide column">
                            <progress value="0" max="1" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="status ten wide column">No Output</div>
                          <span>Choose a file to start</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="content extra">
                <small>
                  Powered by <a href="https://github.com/naptha/tesseract.js#tesseractjs">Tesseract JS</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageToTextConverter;
