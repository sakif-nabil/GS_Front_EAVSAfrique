import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {Route, Router} from "@angular/router";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
private currentProduct: any;
  public mode: number=1;
  public categories:any;

 

  materiel= {
    id!: '',
    libelle: '',
    prix: '',
    unite: '',
    categorie:{
      id: ''
    }
}


  constructor(private catService: CatalogueService,private router:Router) { }

 
  ngOnInit(): void {
    this.onGetCategories();
  }
  fun(event){
   console.log(event)
  }
  onSaveProduct(data: any) {
    console.log(this.materiel)
    // this.catService.saveResource(this.catService.host+"/materiel",this.materiel)
    //   .subscribe(res=> {
    //        // this.router.navigateByUrl("/products");
    //     this.currentProduct=res;
    //     this.mode=2;

    //   },err=>{
    //     console.log(err);
    //   })
  }

  onNewProduct() {
    this.mode=1;
  }

  onGetCategories() {
    this.catService.onGetCategories()
      .subscribe(data=>{
        this.categories=data;
       
      },err=>{
        console.log(err);
      });


  }
}
