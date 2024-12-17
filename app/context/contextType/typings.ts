export interface UserState {}
export type Action = { type: 'SET_DEFAULT'} | {type:"SET_INFO", value:UserState};