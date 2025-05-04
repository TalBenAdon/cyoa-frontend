import { useEffect, useState } from "react"
import AiText from "./components/AiText"
import Options from "./components/Options/Options"
import httpClient from "./api/httpClient"
import { AxiosResponse } from "axios"
import { OptionType } from "./components/Options/Option"

type adventureInfo = {
  type: string
  status: number
  history: string[]
}

type aiReply = {
  text : string,
  options: OptionType[]
}
function App() {
  const [aiReply, setAiReply] = useState<aiReply>()
  const [info, setInfo] = useState<adventureInfo>()
  
    async function onStartClick() {
      const response = await httpClient.post<aiReply>("/adventure/start")
      console.log(response.data);
      setAiReply(response.data)
    }

    useEffect(()=> {
    async function getAdventureInfo() {
      const response = await httpClient.get<adventureInfo>("/adventure/info")
      console.log(response.data);
      
      setInfo(response.data)
    }
    
    getAdventureInfo()
    },[])

  return (
    <main className="flex min-h-screen bg-[#f9f9f9] flex-col p-6 ">
    
    <AiText/>
    {info?.status == 0 && !aiReply ? <button onClick={onStartClick}>start new cyoa</button> : ""}
    {/* <Options options={} /> */}
    </main>
  )
}

export default App
