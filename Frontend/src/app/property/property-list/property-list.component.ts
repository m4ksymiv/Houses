import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent: number = 1;
  properties: Array<IProperty>;





  constructor(private route: ActivatedRoute, private housingService:HousingService) { }

  ngOnInit(): void {

    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }


    this.housingService.getAllproperties(this.SellRent).subscribe(
      data=>{
        this.properties = data;
      }
    )




//    this.http.get('data/properties.json').subscribe(
//      data=>{
//        this.properties=data;
//      }
//    )



  }

}
