import axios from "axios";
import { useState } from "react";
const Home = () => {
    const [date, setDate] = useState('');
    const [expl,setExpl] = useState('');
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [video, setVideo] = useState('');
     
    const url = "https://api.nasa.gov/planetary/apod?api_key=YSKlW1unEO1qaFQ4eXctjAVD9jjxpgYuIwhPTvmf";
    const key = "YSKlW1unEO1qaFQ4eXctjAVD9jjxpgYuIwhPTvmf";

    const getrequest = async () => {
        const result = await axios.get(url);
        console.log(result);
        setDate(result.data.date);
        setExpl(result.data.explanation);
        setImg(result.data.url);
        setTitle(result.data.title);
        setVideo(result.data.url);
    }
    getrequest();
    return(
        <>      
                 <div className="info">
                    <p>{expl}</p>
                </div>
                <div className = "date">
                    <div>{date}</div>
                </div>
                <h6>{title}</h6>
                <img src = {img}></img>
                <div className = "videosection">
                    <a href = {video}>Photo/explanation video link</a>
                </div>
                <h6 className = "credits">Credits : Ishan Das</h6>    
        </>    
    )
}
export default Home;