import { Select } from "../app/select.model";

export interface User{
    firstName: string,
    lastName:string,
    email:string,
    education:Select[],
    userName:string,
    password:string
}