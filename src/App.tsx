import { useEffect, useState } from "react";
import axios from "axios";
import { Message } from "./Message";

function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(res.data.slip);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="bg-dark-blue-500 min-h-screen flex items-center justify-center">
      <Message id={advice.id} advice={advice.advice} />
    </div>
  );
}

export default App;
