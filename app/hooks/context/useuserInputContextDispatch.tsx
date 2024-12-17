import { useContext } from "react"
import { userContextDispatch } from "@/app/context/userInputform"
const useuserInputContextDispatch = () => {
  const userInputContextDispatch = useContext(userContextDispatch);
  if(!userInputContextDispatch) throw new Error('not found provider')
  return userInputContextDispatch;
}

export default useuserInputContextDispatch