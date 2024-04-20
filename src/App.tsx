import { useEffect, useState } from "react";
import axios from "axios";

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

  return <></>;
}

export default App;
