import { Injectable } from '@angular/core';
import { IPrecaution } from 'src/app/precautions/shared/interfaces/iprecaution';

@Injectable({
  providedIn: 'root'
})
export class PrecautionService {

  precautions: IPrecaution[] = [{
    description:'Clean your hands often. Use soap and water, or an alcohol-based hand rub.',
    img:'assets/hand-washing.webp' ,
  }, 
  {
    description:'Maintain a safe distance from anyone who is coughing or sneezing.',
    img:'assets/distance.jpg' 
  },
  {
    description:'Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.',
    img:'assets/cover-with-elbow.jpg' 
  },
  {
    description:'Always wear mask when you go outside',
    img:'assets/mask.jpg' 
  },
  {
    description:'Avoid unprotected contact with live wild or farm animals',
    img:'assets/hen.png' 
  }
];

  constructor() { }

  /** GET All precaution detail. */
  getPrecautions(): IPrecaution[] {
    return this.precautions;
  }

}
