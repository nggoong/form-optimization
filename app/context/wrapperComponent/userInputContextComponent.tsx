import { PropsWithChildren, useContext, Dispatch } from "react";
import { userContextDispatch, userContextState } from "../userInputform";
import UserInputProvider from "../userInputform";

const UserInputContextComponent = ({children}: PropsWithChildren) => {
  return(
    <UserInputProvider>
    {children}
    </UserInputProvider>
  )
}

export default UserInputContextComponent;