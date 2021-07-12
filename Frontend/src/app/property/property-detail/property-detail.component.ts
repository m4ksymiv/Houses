import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId: any;
  property = new Property();


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
            this.property.Image = data.Image;
            this.property.Name = data.Name;
            this.property.BHK = data.BHK;
            this.property.PType = data.PType;
            this.property.Price = data.Price;
            this.property.City = data.City;
            this.property.BuiltArea = data.BuiltArea;
            this.property.CarpetArea = data.CarpetArea;
            this.property.FType = data.FType;
            this.property.FloorNo = data.FloorNo;
            this.property.AOP = data.AOP;
            this.property.PossessionOn = data.PossessionOn;
            this.property.MainEntrance = data.MainEntrance;
            this.property.Gated = data.Gated;
            this.property.Security = data.Security;
            this.property.Maintenance = data.Maintenance;
            this.property.Description = data.Description;
            this.property.Address = data.Address;
            this.property.Address2 = data.Address2;


          }
        )
      }
    );
  }

}
