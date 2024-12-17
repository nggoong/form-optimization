export type UserState = Record<string, string>
// export interface UserState {
//   [key:string]:string;
// }
export type Action = { type: 'SET_DEFAULT'} | {type:"SET_INFO", value:UserState};