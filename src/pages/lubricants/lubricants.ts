import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuggestionProvider } from '../../providers/suggestion/suggestion';

/**
 * Generated class for the LubricantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lubricants',
  templateUrl: 'lubricants.html',
})
export class LubricantsPage {
  selectionOptType : any;
  selectionOptBrand : any;
  selectionOptEngine : any;
  selectionOptCC : any;
  suggestOpt0 : any;
  suggestOpt1 : any;
  suggestOpt2 : any;
  lubName : any;
  lubLink : any;
  descPoint1 : any;
  descPoint2 : any;
  descPoint3 : any;
  custBenPoint1 : any;
  custBenPoint2 : any;
  custBenPoint3 : any;
  custBenPoint4 : any;
  custBenPoint5 : any;
  custBenPoint6 : any;
  custBenPoint7 : any;
  appPoint1 : any;
  appPoint2 : any;
  appPoint3 : any;
  hsePoint1 : any;
  hsePoint2 : any;
  hsePoint3 : any;
  specPoint1 : any;
  specPoint2 : any;
  specPoint3 : any;
  specPoint4 : any;
  specPoint5 : any;
  specPoint6 : any;
  specPoint7 : any;
  specPoint8 : any;
  specPoint9 : any;
  specPoint10 : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public selection: SuggestionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LubricantsPage');
  }

  suggestion() {
    if (this.selection.typeId === 0) //car
    {
      //new
      if (this.selection.engineId === 0) {
        if (this.selection.ccId === 0) //alert("high cc");
        {
          this.suggestOpt0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.suggestOpt1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          this.suggestOpt2 = [2, 2, 2, 2, 2, 2, 14, 2, 2, 2, 14, 14, 2, 14, 2, 14, 2, 10, 2, 2, 2, 2, 14, 2, 14, 2, 2];
        } else if (this.selection.ccId === 1) //alert("mid cc")
        {
          this.suggestOpt0 = [0, 0, 0, 11, 11, 11, 0, 11, 11, 11, 0, 0, 0, 0, 11, 0, 11, 8, 0, 11, 0, 11, 0, 11, 0, 0, 0];
          this.suggestOpt1 = [4, 4, 4, 12, 12, 12, 2, 12, 12, 12, 2, 2, 1, 2, 12, 2, 12, 9, 1, 12, 1, 12, 2, 12, 12, 1, 1];
          this.suggestOpt2 = [2, 2, 2, 13, 13, 13, 16, 13, 13, 13, 16, 16, 2, 16, 13, 16, 13, 10, 2, 13, 2, 13, 16, 13, 16, 2, 2];
        } else if (this.selection.ccId === 2) //alert("low cc");
        {
          this.suggestOpt0 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 8, 5, 5, 5, 5, 5, 5, 5, 5, 5];
          this.suggestOpt1 = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9, 6, 6, 6, 6, 6, 6, 6, 6, 6];
          this.suggestOpt2 = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 10, 7, 7, 7, 7, 7, 7, 7, 7, 7];
        }
      } else if (this.selection.engineId === 1) //old
      {
        if (this.selection.ccId === 0) {
          this.suggestOpt0 = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
          this.suggestOpt1 = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
          this.suggestOpt2 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        }
      }
    } else if (this.selection.typeId === 1) //lorry
    {
      //new
      if (this.selection.engineId === 0) {
        if (this.selection.ccId === 0) //alert("high cc");
        {
          this.suggestOpt0 = [31, 32, 33, 34, 35, 36, 37];
          this.suggestOpt1 = [31, 32, 33, 34, 35, 36, 37];
          this.suggestOpt2 = [31, 32, 33, 34, 35, 36, 37];
        } else if (this.selection.ccId === 1) //alert("mid cc")
        {
          this.suggestOpt0 = [31, 32, 33, 34, 35, 36, 37];
          this.suggestOpt1 = [31, 32, 33, 34, 35, 36, 37];
          this.suggestOpt2 = [31, 32, 33, 34, 35, 36, 37];
        } else if (this.selection.ccId === 2) //alert("low cc");
        {
          this.suggestOpt0 = [31, 32, 33, 34, 35, 36, 37];
          this.suggestOpt1 = [31, 32, 33, 34, 35, 36, 37];
          this.suggestOpt2 = [31, 32, 33, 34, 35, 36, 37];
        }
      } else if (this.selection.engineId === 1) //old
      {
        if (this.selection.ccId === 0) {
          this.suggestOpt0 = [31, 32, 33, 34, 35, 36, 37];
          this.suggestOpt1 = [31, 32, 33, 34, 35, 36, 37];
          this.suggestOpt2 = [31, 32, 33, 34, 35, 36, 37];
        }
      }
    } else if (this.selection.typeId === 2) //motorcycle
    {
      if (this.selection.engineId === 0) //4stroke
      {
        if (this.selection.ccId === 0) //sportbike
        {
          for (var x = 0; x < motorcycle.length; x++) {
            this.suggestOpt0[x] = 24;
            this.suggestOpt1[x] = 25;
            this.suggestOpt2[x] = 26;
          }
        } else if (this.selection.ccId === 1) //easyrider
        {
          for (var x = 0; x < motorcycle.length; x++) {
            this.suggestOpt0[x] = 27;
            this.suggestOpt1[x] = 28;
            this.suggestOpt2[x] = 999;
          }
        } else if (this.selection.ccId === 2) //old
        {
          for (var x = 0; x < motorcycle.length; x++) {
            this.suggestOpt0[x] = 27;
            this.suggestOpt1[x] = 28;
            this.suggestOpt2[x] = 29;
          }
        } else if (this.selection.ccId === 3) //less 200cc
        {
          for (var x = 0; x < motorcycle.length; x++) {
            this.suggestOpt0[x] = 27;
            this.suggestOpt1[x] = 28;
            this.suggestOpt2[x] = 29;
          }
        } else if (this.selection.ccId === 4) //scooter
        {
          for (var x = 0; x < motorcycle.length; x++) {
            this.suggestOpt0[x] = 30;
            this.suggestOpt1[x] = 999;
            this.suggestOpt2[x] = 999;
          }
        }
      } else if (this.selection.engineId === 1) //2 stroke
      {
        if (this.selection.ccId === 0) //normal
        {
          //alert("motor normal")
          for (var x = 0; x < motorcycle.length; x++) {
            this.suggestOpt0[x] = 21;
            this.suggestOpt1[x] = 22;
            this.suggestOpt2[x] = 23;
          }
        } else if (this.selection.ccId === 1) //harsh
        {
          for (var x = 0; x < motorcycle.length; x++) {
            this.suggestOpt0[x] = 18;
            this.suggestOpt1[x] = 19;
            this.suggestOpt2[x] = 20;
          }
        }
      }
    }
  
    document.getElementById("tabOpt1").innerHTML = lubricant[suggestOpt0[selectionOptBrand]];
    document.getElementById("tabOpt2").innerHTML = lubricant[suggestOpt1[selectionOptBrand]];
    document.getElementById("tabOpt3").innerHTML = lubricant[suggestOpt2[selectionOptBrand]];
  
    document.getElementById("lubNameOpt1").innerHTML = lubName[suggestOpt0[selectionOptBrand]];
    document.getElementById("lubNameOpt2").innerHTML = lubName[suggestOpt1[selectionOptBrand]];
    document.getElementById("lubNameOpt3").innerHTML = lubName[suggestOpt2[selectionOptBrand]];
  
    document.getElementById("descOpt1").innerHTML = "<ul><li>" +
      descPoint1[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      descPoint2[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      descPoint3[suggestOpt0[selectionOptBrand]] + "</li></ul>";
    document.getElementById("descOpt2").innerHTML = "<ul><li>" +
      descPoint1[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      descPoint2[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      descPoint3[suggestOpt1[selectionOptBrand]] + "</li></ul>";
    document.getElementById("descOpt3").innerHTML = "<ul><li>" +
      descPoint1[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      descPoint2[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      descPoint3[suggestOpt2[selectionOptBrand]] + "</li></ul>";
  
    document.getElementById("appOpt1").innerHTML = "<ul><li>" +
      appPoint1[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      appPoint2[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      appPoint3[suggestOpt0[selectionOptBrand]] + "</li></ul>";
    document.getElementById("appOpt2").innerHTML = "<ul><li>" +
      appPoint1[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      appPoint2[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      appPoint3[suggestOpt1[selectionOptBrand]] + "</li></ul>";
    document.getElementById("appOpt3").innerHTML = "<ul><li>" +
      appPoint1[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      appPoint2[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      appPoint3[suggestOpt2[selectionOptBrand]] + "</li></ul>";
  
    document.getElementById("benOpt1").innerHTML = "<ul><li>" +
      custBenPoint1[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      custBenPoint2[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      custBenPoint3[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      custBenPoint4[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      custBenPoint5[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      custBenPoint6[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      custBenPoint7[suggestOpt0[selectionOptBrand]] + "</li></ul>";
    document.getElementById("benOpt2").innerHTML = "<ul><li>" +
      custBenPoint1[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      custBenPoint2[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      custBenPoint3[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      custBenPoint4[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      custBenPoint5[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      custBenPoint6[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      custBenPoint7[suggestOpt1[selectionOptBrand]] + "</li></ul>";
    document.getElementById("benOpt3").innerHTML = "<ul><li>" +
      custBenPoint1[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      custBenPoint2[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      custBenPoint3[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      custBenPoint4[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      custBenPoint5[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      custBenPoint6[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      custBenPoint7[suggestOpt2[selectionOptBrand]] + "</li></ul>";
  
    document.getElementById("hseOpt1").innerHTML = "<ul><li>" +
      hsePoint1[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      hsePoint2[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      hsePoint3[suggestOpt0[selectionOptBrand]] + "</li></ul>";
    document.getElementById("hseOpt2").innerHTML = "<ul><li>" +
      hsePoint1[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      hsePoint2[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      hsePoint3[suggestOpt1[selectionOptBrand]] + "</li></ul>";
    document.getElementById("hseOpt3").innerHTML = "<ul><li>" +
      hsePoint1[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      hsePoint2[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      hsePoint3[suggestOpt2[selectionOptBrand]] + "</li></ul>";
  
    document.getElementById("specOpt1").innerHTML = "<ul><li>" +
      specPoint1[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      specPoint2[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      specPoint3[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      specPoint4[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      specPoint5[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      specPoint6[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      specPoint7[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      specPoint8[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      specPoint9[suggestOpt0[selectionOptBrand]] + "</li><li>" +
      specPoint10[suggestOpt0[selectionOptBrand]] + "</li></ul>";
    document.getElementById("specOpt2").innerHTML = "<ul><li>" +
      specPoint1[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      specPoint2[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      specPoint3[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      specPoint4[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      specPoint5[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      specPoint6[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      specPoint7[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      specPoint8[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      specPoint9[suggestOpt1[selectionOptBrand]] + "</li><li>" +
      specPoint10[suggestOpt1[selectionOptBrand]] + "</li></ul>";
    document.getElementById("specOpt3").innerHTML = "<ul><li>" +
      specPoint1[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      specPoint2[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      specPoint3[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      specPoint4[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      specPoint5[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      specPoint6[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      specPoint7[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      specPoint8[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      specPoint9[suggestOpt2[selectionOptBrand]] + "</li><li>" +
      specPoint10[suggestOpt2[selectionOptBrand]] + "</li></ul>";
    document.getElementById("downloadDocOpt1").innerHTML = '<center><button onClick="openDocument(&#39;' + lubLink[suggestOpt0[selectionOptBrand]] + '&#39;)" >' + lubName[suggestOpt0[selectionOptBrand]] + '</button></center>';
    document.getElementById("downloadDocOpt2").innerHTML = '<center><button onClick="openDocument(&#39;' + lubLink[suggestOpt1[selectionOptBrand]] + '&#39;)" >' + lubName[suggestOpt1[selectionOptBrand]] + '</button></center>';
    document.getElementById("downloadDocOpt3").innerHTML = '<center><button onClick="openDocument(&#39;' + lubLink[suggestOpt2[selectionOptBrand]] + '&#39;)" >' + lubName[suggestOpt2[selectionOptBrand]] + '</button></center>';
    window.location.hash = "#suggestion";
  }

  getLubricantInfo() {
    for (var x = 0; x < lubricant.length; x++) {
      var counter = 0;
      var Ref = new Firebase(myFirebaseRef + "/" + x);
      Ref.on("value", function (snapshot, prevChildKey) {
        var newPost = snapshot.val();
        lubName[counter] = newPost.name;
        lubLink[counter] = newPost.links;
        descPoint1[counter] = newPost.desc.point1;
        descPoint2[counter] = newPost.desc.point2;
        descPoint3[counter] = newPost.desc.point3;
        custBenPoint1[counter] = newPost.cust_ben.point1;
        custBenPoint2[counter] = newPost.cust_ben.point2;
        custBenPoint3[counter] = newPost.cust_ben.point3;
        custBenPoint4[counter] = newPost.cust_ben.point4;
        custBenPoint5[counter] = newPost.cust_ben.point5;
        custBenPoint6[counter] = newPost.cust_ben.point6;
        custBenPoint7[counter] = newPost.cust_ben.point7;
        appPoint1[counter] = newPost.application.point1;
        appPoint2[counter] = newPost.application.point2;
        appPoint3[counter] = newPost.application.point3;
        hsePoint1[counter] = newPost.hse.point1;
        hsePoint2[counter] = newPost.hse.point2;
        hsePoint3[counter] = newPost.hse.point3;
        specPoint1[counter] = newPost.spec.point1;
        specPoint2[counter] = newPost.spec.point2;
        specPoint3[counter] = newPost.spec.point3;
        specPoint4[counter] = newPost.spec.point4;
        specPoint5[counter] = newPost.spec.point5;
        specPoint6[counter] = newPost.spec.point6;
        specPoint7[counter] = newPost.spec.point7;
        specPoint8[counter] = newPost.spec.point8;
        specPoint9[counter] = newPost.spec.point9;
        specPoint10[counter] = newPost.spec.point10;
        counter++;
      });
    }
    retrieveUserData();
  }
}
