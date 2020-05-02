import { Component, OnInit } from '@angular/core';
import { DistrictService } from 'src/app/core/services/district.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IResponse } from '../shared/interfaces/iresponse';
import { KeyValue } from '@angular/common';
import { IStateDetail } from '../shared/interfaces/istate-detail';
import { IDistrict } from '../shared/interfaces/IDistrict';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.css']
})
export class StateDetailComponent implements OnInit {

  currentStateName: string;
  stateDetail: Map<String, IStateDetail>;
  filteredDistricts : Map<String,String|IDistrict>;

  constructor(private districtService : DistrictService, 
    private activatedRoute: ActivatedRoute, private router: Router) {
     }

  ngOnInit(){
    this.listAllDistricts();
  }

  listAllDistricts(){
    this.currentStateName = this.activatedRoute.snapshot.params["code"];
    if(this.currentStateName) {
    this.districtService.getDistrictsByState().subscribe(data => {
      console.log(data);
      this.filterDistricts(data);
     })
    }
  }

  filterDistricts(stateDetails :KeyValue<String, IStateDetail>){
    let district = Object.values(stateDetails).filter(element => {
      return (element.statecode == this.currentStateName);
    });
    this.filteredDistricts = new Map(Object.entries(district[0].districtData));
  }
}
