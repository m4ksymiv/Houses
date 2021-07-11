import { IPropertyBase } from "./ipropertybase";

export class Property implements IPropertyBase{
  Id: string;
  Sellrent: number;
  Name: string;
  PType: string;
  BHK: string;
  FType: string;
  Price: string;
  BuiltArea: string;
  CarpetArea?: string;
  Address: string;
  Address2?: string;
  City: string;
  FloorNo?: string;
  TotalFloor?: string;
  RTM: string;
  AOP?: string;
  MainEntrance?: string;
  Security?: string;
  Gated?: string;
  Maintenance?: string;
  Possession?: string;
  Image?: string;
  Description?: string;
  PostedOn: string;
  PostedBy: string;
}
