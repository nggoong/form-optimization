import { PropsWithChildren, useContext, Dispatch } from "react";
import { userContextDispatch, userContextState } from "../userInputform";
import UserInputProvider from "../userInputform";

const UserInputContextComponent = ({children}: PropsWithChildren) => {
  const userInputStateContext = useContext(userContextState);
  const userInputDispatchContext = useContext(userContextDispatch);
  return(
    <UserInputProvider>
    {children}
    </UserInputProvider>
  )
}

export default UserInputContextComponent;