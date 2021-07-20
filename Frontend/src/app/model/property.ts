import { IPropertyBase } from "./ipropertybase";

export class Property implements IPropertyBase{
  id: number;
  sellRent: number;
  bHK: string;
  propertyType: string;
  furnishingType: string;
  name: string;
  city: string;
  price: string;
  builtArea: string;
  carpetArea: string;
  security: string;
  maintenance: string;
  floorNo:string;
  totalFloor:string;
  address:string;
  address2:string;
  landMark:string;
  rTM:string;
  possessionOn:Date;
  aOP:string;
  gated:string;
  mainEntrance:string;
  description:string;
  image:string;

}
