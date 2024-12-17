import { useContext } from "react";
import { userContextState } from "@/app/context/userInputform";
const useuserInputContextState = () => {
  const userInputContextState = useContext(userContextState);
  if(!userInputContextState) throw new Error('not found provider')
  return userInputContextState;
}

export default useuserInputContextState;