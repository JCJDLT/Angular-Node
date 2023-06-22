import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  images: any = [];
  filterCategory = "";
  constructor(private catalogueService: CatalogueService) { }
  
  ngOnInit() {
    this.catalogueService.getImages()
      .subscribe(
        res => {
          this.images = res;
        },
        err => console.log(err)
      )
  }

  get filteredImages() {
    if (!this.filterCategory) {
      return this.images;  // Si no hay categoría de filtro, devuelve todas las imágenes
    }
    return this.images.filter((image: any) => image.category === this.filterCategory);
  }
}


