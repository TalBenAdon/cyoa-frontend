import { useEffect, useRef, useState } from "react"
import AiText from "./components/AiText"
import Options from "./components/Options/Options"
import httpClient from "./api/httpClient"



type adventureInfo = {
  type: string
  status: number
  history: string[]
}

type aiReply = {
  text: string,
  options: string[]
}

function App() {
  const [aiFullString, setAiFullString] = useState<string>("")
  const [adventureStory, setAdventureStory] = useState<string>("")
  const [options, setOptions] = useState<string[]>([])
  const [aiReply, setAiReply] = useState<aiReply>()
  const [info, setInfo] = useState<adventureInfo>()

  const bufferRef = useRef("")
  const isStreaming = useRef(false)



  const fetchStreamedChat = async () => {
    const response = await fetch("http://localhost:8000/adventure/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: "fantasy" }),
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder("utf-8");


    let currentTag = ""

    const appendingFunction = (toAppend: string, currentTag: string) => {
      switch (currentTag) {

        case "text":
          setAdventureStory(prev => prev + toAppend);
          break;
        case "option1":
          setOptions((prev) => {
            const updated = [...prev]
            updated[0] = (updated[0] || "") + toAppend;
            return updated
          });
          break;
        case "option2":
          setOptions((prev) => {
            const updated = [...prev]
            updated[1] = (updated[1] || "") + toAppend;
            return updated
          });
          break;
        case "option3":
          setOptions((prev) => {
            const updated = [...prev]
            updated[2] = (updated[2] || "") + toAppend;
            return updated
          });
          break;
        default:
          break;
      }
    }

    while (true) {
      const { value, done } = await reader!.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      bufferRef.current += chunk;
      console.log({ "currentTag": currentTag });


      const tagStart = bufferRef.current.lastIndexOf("<");
      const tagEnd = bufferRef.current.lastIndexOf(">");

      if (tagStart !== -1) { // tag start found
        console.log({ "tag start detected!:": bufferRef.current });

        if (tagEnd !== -1) { //tag end also found
          currentTag = bufferRef.current.slice(tagStart + 1, tagEnd)
          console.log(currentTag);
          bufferRef.current = bufferRef.current.slice(0, tagStart) + bufferRef.current.slice(tagEnd + 1) // cut away the tag
          const toAppend = bufferRef.current;

          appendingFunction(toAppend, currentTag)
          bufferRef.current = "";
        } else {
          continue
        }

      } else {
        const toAppend = bufferRef.current;
        appendingFunction(toAppend, currentTag)
        bufferRef.current = "";
      }

      // if (tagStart > tagEnd) {



      //   bufferRef.current = bufferRef.current.slice(tagStart + bufferRef.current.length);
      //   console.log(bufferRef.current);

      // } else {

      //   const toAppend = bufferRef.current;
      //   setAdventureStory(prev => prev + toAppend);
      //   bufferRef.current = "";
      // }


    }

  };
  async function onStartClick() {
    const response = await httpClient.post<aiReply>("/adventure/start")
    console.log(response.data);
    setAiReply(response.data)
  }

  useEffect(() => {
    async function getAdventureInfo() {
      const response = await httpClient.get<adventureInfo>("/adventure/info")
      console.log(response.data);

      setInfo(response.data)
    }

    getAdventureInfo()
  }, [])

  return (
    <main className="flex min-h-screen bg-[#ddb4ab] flex-col p-6 ">

      <AiText text={adventureStory} />
      {info?.status == 0 && !aiReply ? <button onClick={fetchStreamedChat}>start new cyoa</button> : ""}

      {options.length > 0 ? <Options options={options} /> : ""}

    </main>
  )
}

export default App
