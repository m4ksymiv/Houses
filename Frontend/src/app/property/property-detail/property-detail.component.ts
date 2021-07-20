import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId: any;
  property = new Property();
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingService: HousingService) { }

  ngOnInit() {
    //this.propertyId = +this.route.snapshot.params['id'];
    this.propertyId = Number(this.route.snapshot.params['id']);


    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id']
        this.housingService.getProperty(this.propertyId).subscribe(
          (data: any) => {
            this.property.image = data.Image;
            this.property.name = data.Name;
            this.property.bHK = data.BHK;
            this.property.propertyType = data.PType;
            this.property.price = data.Price;
            this.property.city = data.City;
            this.property.builtArea = data.BuiltArea;
            this.property.carpetArea = data.CarpetArea;
            this.property.furnishingType = data.FType;
            this.property.floorNo = data.FloorNo;
            this.property.aOP = data.AOP;
            this.property.possessionOn = data.PossessionOn;
            this.property.mainEntrance = data.MainEntrance;
            this.property.gated = data.Gated;
            this.property.security = data.Security;
            this.property.maintenance = data.Maintenance;
            this.property.description = data.Description;
            this.property.address = data.Address;
            this.property.address2 = data.Address2;
          }
        )
      }
    );

    this.property.aOP = this.housingService.getPropertyAge(this.property.possessionOn);


    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide

      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/internal-1.jpg',
        medium: 'assets/images/internal-1.jpg',
        big: 'assets/images/internal-1.jpg'
      },
      {
        small: 'assets/images/internal-2.jpg',
        medium: 'assets/images/internal-2.jpg',
        big: 'assets/images/internal-2.jpg'
      },
      {
        small: 'assets/images/internal-3.jpg',
        medium: 'assets/images/internal-3.jpg',
        big: 'assets/images/internal-3.jpg'
      },
      {
        small: 'assets/images/internal-4.jpg',
        medium: 'assets/images/internal-4.jpg',
        big: 'assets/images/internal-4.jpg'
      },
      {
        small: 'assets/images/internal-5.jpg',
        medium: 'assets/images/internal-5.jpg',
        big: 'assets/images/internal-5.jpg'
      }
    ];



  }

}
