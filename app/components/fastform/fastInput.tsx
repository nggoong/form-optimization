import { useState } from "react";
import PenaltyComp from "../penaltyComp/penaltyComp";
interface Props {
  name: string;
  wasSubmitted: boolean;
}
const FastInput = ({name, wasSubmitted}: Props) => {
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
      required
      aria-describedby={displayErrorMessage ? `${name}-error`: undefined}
      />
      {displayErrorMessage ? (
        <span role="alert" id={`${name}-error`} className="error-message">{errorMessage}</span>
      ): null}
    </div>
  )
}

export default FastInput;