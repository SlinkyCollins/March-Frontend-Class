import axios from "axios"
import { useState } from "react"


const Upload = () => {
    let endpoint = "https://march-backend-class.onrender.com/student/upload"
    const [myFile, setMyFile] = useState("")
    const [myImage, setMyImage] = useState("")
    

    const handleFile = (e) => {
        // console.log(e);
        let file = e.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            // console.log(reader.result);
            setMyFile(reader.result)
        }
    }

    const Uploadimage = async () => {
        axios.post(endpoint, {myFile})
        .then((res)=>{
            console.log(res.data.result.url);
            setMyImage(res.data.result.url)
        })
    }
  return (
    <div>
        <input type="file" onChange={(e)=>handleFile(e)} />
        <button onClick={Uploadimage}>Upload</button>

        <img src={myImage} alt="" />
    </div>
  )
}

export default Upload