import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

public host:string="http://localhost:82";
   //"https://testmylife.herokuapp.com";
  //"http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  public getProducts(page:number,size:number){
    return this.httpClient.get(this.host+"/materielpaginatedList");
  }

  public onGetCategories(){
    return this.httpClient.get(this.host+"/categoriepaginatedList");
  }

  

  public getProductsByKeyword(mc:string,page:number,size:number){
    return this.httpClient.get(this.host+"/produits/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size);
  }
  public deleteResource(data,url):Observable<any>{

 
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:data
    };
  
    return this.httpClient.delete(this.host + url,options)
  }
  public saveResource(url,data):Observable<any>{
    return this.httpClient.post<any>(url,data);
  }
  public getResource(url):Observable<any>{
    return this.httpClient.get<any>(this.host+url);
  }
  public updateResource(url,data){
    return this.httpClient.put(this.host+url,data);
  }


}
