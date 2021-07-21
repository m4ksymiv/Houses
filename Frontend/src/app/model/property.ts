import { IPropertyBase } from "./ipropertybase";

export class Property implements IPropertyBase{
  id: number;
  sellRent: number;
  bhk: string;
  propertyTypesId: number;
  propertyTypes: string;
  furnishingTypesId: number;
  furnishingTypes: string;
  name: string;
  cityId: number;
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
  rtm:string;
  possessionOn:Date;
  aOP:string;
  gated:string;
  mainEntrance:string;
  description:string;
  image:string;

}
