import { comuni } from "./comuni";


export class Client{
  id!: number;
  ragioneSociale!:string;
  partitaIva!: string;
  tipoCliente!:string;
  email!:string;
  pec!:string;
  telefono!:string;
  nomeContatto!:string;
  cognomeContatto!:string;
  telefonoContatto!:string;
  emailContatto!: string;
  indirizzoSedeOperativa!: {
      id: number,
      via: string,
      civico: string,
      cap: string ,
      localita: string,
      comune:comuni

  }}
