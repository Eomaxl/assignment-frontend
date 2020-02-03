export interface IUser {
    name: IName,
    id?: string,
    customerID?: number,
    birthday?: string,
    gender?: string,
    lastContact?: Date,
    customerLifetimeValue?: number,
    v?:number
  }

  interface IName
  {
    firstName:string,
    lastName:string
  }
  