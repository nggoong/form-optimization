import React, {useReducer, createContext, PropsWithChildren, Dispatch} from 'react'
import { UserState, Action } from './contextType/typings';
// 폼의 유효성 검사를 제출 전 미리 하기 위한 특정 폼 데이터만 전역으로 관리하는 context
const defaultUserInfo = {
  password:"",
  passwordConfirm:""
}
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