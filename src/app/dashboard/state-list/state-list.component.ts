import { Component, OnInit, NgModule } from '@angular/core';
import { StateService } from 'src/app/core/services/state.service';
import { IState } from '../shared/interfaces/istate';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})

export class StateListComponent implements OnInit {

  p: number = 1;
  states : IState[];

  constructor(private stateService: StateService) { 
  }

  ngOnInit() {
    this.stateService.getStates().subscribe(data => {
      this.states = data;
     })
  }

}
