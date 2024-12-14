import React, {useReducer, createContext, PropsWithChildren, Dispatch} from 'react'
interface UserState {

}
const defaultUserInfo = {

}

type Action = { type: 'SET_DEFAULT'} | {type:"SET_INFO", value:UserState};
type TypeUserDispatch = Dispatch<Action>;

export const userContextState = createContext<UserState | undefined>(undefined);
export const userContextDispatch = createContext<TypeUserDispatch | undefined>(undefined);

const userInputReducer = (state:UserState = defaultUserInfo, action:Action) => {
  switch(action.type) {
    case 'SET_DEFAULT': {
      return {...defaultUserInfo}
    }

    case 'SET_INFO': {
      const value = action.value;
      
      return {...state, ...value}
    }
  }
}

const UserInputProvider = ({children}: PropsWithChildren) => {
  const [userInput, dispatch] = useReducer(userInputReducer, defaultUserInfo);

  return (
    <userContextDispatch.Provider value={dispatch}>
      <userContextState.Provider value={userInput}>
        {children}
      </userContextState.Provider>
    </userContextDispatch.Provider>
  )
}

export default UserInputProvider;