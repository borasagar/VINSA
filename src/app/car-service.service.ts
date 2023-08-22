import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  //cars:any;
  userLoggedIn: boolean;
  user:any;
  details:any;
  // cars:any;

  constructor(private http:HttpClient) { 
    this.userLoggedIn = false;
    this.user=null;
  }
  setProduct(cart:any){
    // console.log(cart);
    return this.http.post("insertCart",cart);
  }
  getProduct(id:any){
    // console.log(id);
    return this.http.get("getById/"+id);
  }
  setUser(user:any){
    this.user=user;
  }
  getUser(){
    return this.user;
  }

  setUserLoggedIn(){
    this.userLoggedIn = true;
  }

  getUserLoggedIn(){
    return this.userLoggedIn;
  }

  getCountriesList(){
    return this.http.get('https://restcountries.com/v2/all');
  }

  getCars(){
    return this.http.get("carsAll");
  }

  getBikes(){
    return this.http.get("bikesAll");
  }

  getUsers(){
    return this.http.get("usersAll");
  }

  registerUser(user :any){
    return this.http.post("insertUser",user);
  }

  registerProductCar(product:any){
    return this.http.post("insertCar",product);
  }

  registerProductBike(product:any){
    return this.http.post("insertBike",product);
  }

  getById(id: number){
    // console.log(id)
    
    // return this.http.get("getById/"+id);
    
  }

  deleteCar(id:number){
    //console.log(id);
    return this.http.delete("deleteByCarId/"+id);
  }

  deleteBike(id:number){
    return this.http.delete("deleteByBikeId/"+id);
  }

  deleteCart(id:number){
    return this.http.delete("deleteByCartId/"+id);
  }

  // viewById(id:number){
  //   return this.http.get("getById/"+id);
  // }

  updateCar(product : any){
    return this.http.put("updateCar",product);
  }

  updateBike(product : any){
    return this.http.put("updateBike",product);
  }
  
  getSearch(search:any){
    // console.log(search);
    return this.http.get("findCarName/"+search);
  }
  getSearch2(search:any){
    // console.log(search);
    return this.http.get("findBikeName/"+search);
  }
  
}
