import { Candidate } from "./candidate";

export interface Party {
  id:number;
  name:string;
  logo:string;
  description:string;
  campaignProgram:string;
  id_party:number;
  candidate: Candidate
}
