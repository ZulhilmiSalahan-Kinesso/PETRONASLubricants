import { Injectable } from '@angular/core';

/*
  Generated class for the SuggestionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SuggestionProvider {
  selection : any;
  public brandId : any;
  public typeId : any;
  public engineId : any;
  public ccId : any;

  constructor() {
    console.log('Hello SuggestionProvider Provider');
  }

  getTypeSelection(id){
    this.typeId = id;
    console.log("Type Id : " + this.typeId);
  }

  getBrandSelection(id){
    this.brandId = id;
    console.log("Type Id : " + this.typeId)
    console.log("Brand Id : " + this.brandId);
  }

  getEngineSelection(id){
    this.engineId = id;
    console.log("Type Id : " + this.typeId)
    console.log("Brand Id : " + this.brandId);
    console.log("Engine Id : " + this.engineId);
  }

  getCCSelection(id){
    this.ccId = id;
    console.log("Type Id : " + this.typeId)
    console.log("Brand Id : " + this.brandId);
    console.log("Engine Id : " + this.engineId);
    console.log("CC Id : " + this.ccId)
  }
}
