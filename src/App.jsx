import React, { useState } from "react";

const App = () => {

  const [url, setUrl] = useState("");
  const [urlList,setUrlList] = useState([]);
  const [latestUrl,setLatestUrl] = useState(null);

  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const trimmedUrl = url.trim();
    if(trimmedUrl === "") return;
    const alreadyExists = urlList.some((u)=>{u.toLowerCase()===trimmedUrl.toLowerCase();});
    let updatedList = [...urlList]
    if(!alreadyExists){
       updatedList = [trimmedUrl, ...urlList];
      // setUrlList(updatedList);
      // setLatestUrl(trimmedUrl)
      // console.log(`Visited URL : ${trimmedUrl}`);
    }
    updatedList = updatedList.slice(0,10)
    setUrlList(updatedList);
      setLatestUrl(trimmedUrl)
    setUrl("");
    // console.log(url)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="border-1 m-2" type="text" name="url" value={url} onChange={(e)=>{setUrl(e.target.value)}} />
        <button className="border-1 m-2 p-2" type="submit">Visit URL</button>
      </form>
      {latestUrl && (
        <div>
          <h3>Recent visited Url</h3>
          <p>{latestUrl}</p>
        </div>
      )}
      <h3>Most recent 10 URLs </h3>
      <ul>
        {urlList.map((u,i)=>{
          <li key={i}>{u}</li>
        })}
      </ul>

    </div>
  );
};

export default App;
