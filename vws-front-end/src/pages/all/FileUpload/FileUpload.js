import axios from "axios";
import React, { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    console.log(file);
    try {
      const res = await axios.post("http://localhost:3000/upload", formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  //javascript
  function download(text, name, type) {
    console.log("---->");
    var a = document.getElementById("a");
    var file = new Blob([text], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
  }
  //html

  return (
    <div className="App">
      <input type="file" onChange={saveFile} />
      <button onClick={uploadFile}>Upload</button>

      <a href="" id="a">
        click here to download your file
      </a>
      <button onClick={()=>download('file text', 'myfilename.txt', 'text/plain')}>
        Create file
      </button>
    </div>
  );
}
