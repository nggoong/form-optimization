import fieldNames from "@/constants/fieldNames";
import FastInput from "./fastInput";
import { useState } from "react";
const Fastform= () => {
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const formAction = (value:FormData) => {
    console.log(value);
    
  } 
  return(
    <>
      <form action={formAction}>
        {fieldNames.map((name:string) => <FastInput name={name} wasSubmitted={wasSubmitted} key={name}/>)}
        <button type="submit">fastform Submit</button>
      </form>
    </>
  )
}

export default Fastform;