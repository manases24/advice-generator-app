import { useEffect, useState } from "react";
import axios from "axios";

import { Message } from "./Message";
import { Button } from "./Button";

function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="bg-dark-blue-500 min-h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center">
        <Message id={advice.id} advice={advice.advice} />
        <Button getAdvice={getAdvice} />
      </div>
    </div>
  );
}

export default App;
