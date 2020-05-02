import { Component, OnInit } from '@angular/core';
import { IPrecaution } from '../shared/interfaces/iprecaution';
import { PrecautionService } from 'src/app/core/services/precaution.service';

@Component({
  selector: 'app-view-precaution',
  templateUrl: './view-precaution.component.html',
  styleUrls: ['./view-precaution.component.css']
})
export class ViewPrecautionComponent implements OnInit {

  precautions : IPrecaution[];

  constructor(private precautionService: PrecautionService) { 
  }

  ngOnInit() {
    this.precautions = this.precautionService.getPrecautions();
  }

}
