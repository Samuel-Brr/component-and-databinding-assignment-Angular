import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() evenArray: number[] = []
  @Input() oddArray: number[] = []

  addCount(count: number){

    if(count % 2 === 0){
      this.evenArray.push(count)
    }else{
      this.oddArray.push(count)
    }
  }

}
