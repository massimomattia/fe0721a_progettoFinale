export class user {
  accessToken!:string;
  email!:string;
  id!:string;
  roles!: [{
    id:number,
    roleName: string
  }];
  tokenType!:string;
  username!:string;
}
