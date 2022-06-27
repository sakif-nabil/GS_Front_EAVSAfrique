import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CatalogueService} from "../services/catalogue.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public currentProduct: any;
  private id: any;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private catService:CatalogueService) { }

  ngOnInit(): void {
    this.id= atob(this.activatedRoute.snapshot.params.id);
    console.log( "-------------------------"+this.id);
    this.catService.getResource("/materiel/"+this.id)
      .subscribe(data=> {
        this.currentProduct=data;
      },err=>{
        console.log(err);

      })

  }


  onUpateProduct(value: any) {
         this.catService.updateResource("/materiel",value)
           .subscribe(data=> {
             alert("Mise a jour avec succes");
             this.router.navigateByUrl("/products");
           },err=>{
             console.log(err);
           })
  }
}
