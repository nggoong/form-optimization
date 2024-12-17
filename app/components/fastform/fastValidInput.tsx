'use client'
import { useState, useContext, useEffect } from "react";
import PenaltyComp from "../penaltyComp/penaltyComp";
import { userContextState, userContextDispatch } from "@/app/context/userInputform";
import useuserInputContextDispatch from "@/app/hooks/context/useuserInputContextDispatch";
// import { Action } from "@/app/context/contextType/typings";
interface Props {
  name:string;
  wasSubmitted:boolean;
}

const FastValidInput = ({name, wasSubmitted}: Props) => {
  const userInputContextState = useContext(userContextState);
  // const userInputContextDispatch = useContext(userContextDispatch);
  const userInputContextDispatch = useuserInputContextDispatch();

  
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);
  const errorMessage = "Error caused"
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const currentTarget = e.currentTarget as HTMLInputElement;
    const value = currentTarget.value;
    setInputValue(value);
  }
  const handleBlur = (e:React.FocusEvent<HTMLInputElement>) => {
    setTouched(true);
  }

  useEffect(() => {
    return(() => {
      userInputContextDispatch({type:"SET_DEFAULT"})
    })
  }, [])
  return(
    <div>
      <PenaltyComp/>
      <label htmlFor={`${name}-input`}>{name}</label>
      <input
      id={`${name}-input`}
      type="text"
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={inputValue}
      pattern="[a-z]{3,10}"
      aria-describedby={displayErrorMessage ? `${name}-error`: undefined}
      />
      {displayErrorMessage ? (
        <span role="alert" id={`${name}-error`} className="error-message">{errorMessage}</span>
      ): null}
    </div>
  )
}

export default FastValidInput;