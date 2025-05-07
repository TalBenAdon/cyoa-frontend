import { useEffect, useState } from "react"
import AiText from "./Components/UI/AIChat/AiText"

import httpClient from "./api/httpClient"
import { useAdventure } from "./context/AdventureContext"
import Options from "./Components/UI/AIChat/Options"



type adventureInfo = {
  type: string
  status: number
  history: string[]
}



function App() {

  // const [adventureStory, setAdventureStory] = useState<string>("")
  // const [options, setOptions] = useState<string[]>([])
  const { options, streamAIResponse, reset } = useAdventure()
  const [info, setInfo] = useState<adventureInfo>()



  useEffect(() => {
    async function getAdventureInfo() {
      const response = await httpClient.get<adventureInfo>("/adventure/info")
      console.log(response.data);

      setInfo(response.data)
    }

    getAdventureInfo()
  }, [])
  const startAdventure = async () => {
    reset();
    await streamAIResponse("http://localhost:8000/adventure/start", {
      type: "fantasy",
    });
  };

  return (
    <main className="flex min-h-screen bg-[#ddb4ab] flex-col p-6 ">

      <AiText />
      {info?.status == 0 ? <button onClick={startAdventure}>start new cyoa</button> : ""}

      {options.length > 0 ? <Options /> : ""}

    </main>
  )
}

export default App
