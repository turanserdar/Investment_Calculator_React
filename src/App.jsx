import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
import Results from "./components/Result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    //These value for the defaul
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });


  const inputIsValid=userInput.duration >= -1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid&&<p className="center"> Please enter a duration greater than a zero.</p>}
    {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
