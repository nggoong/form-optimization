'use client'
import { useState, useEffect } from "react";
import PenaltyComp from "../penaltyComp/penaltyComp";
import useuserInputContextDispatch from "@/app/hooks/context/useuserInputContextDispatch";
import useuserInputContextState from "@/app/hooks/context/useuserInputContextState";
import UserInputContextComponent from "@/app/context/wrapperComponent/userInputContextComponent";
// import { Action } from "@/app/context/contextType/typings";
interface Props {
  name:string;
  wasSubmitted:boolean;
}

const FastValidInput = ({name, wasSubmitted}: Props) => {
  const userInputContextState = useuserInputContextState();
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
    const currentTarget = e.currentTarget as HTMLInputElement;
    const targetName = currentTarget.name;
    const value = currentTarget.value;
    userInputContextDispatch({type:"SET_INFO", value:{[targetName]:value}})
    setTouched(true);
  }

  useEffect(() => {
    return(() => {
      userInputContextDispatch({type:"SET_DEFAULT"})
    })
  }, [])
  return(
    <UserInputContextComponent>
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
    </UserInputContextComponent>
  )
}

export default FastValidInput;