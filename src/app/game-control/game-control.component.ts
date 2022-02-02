import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  intervalId;
  count:number=1
  @Output() countFired = new EventEmitter <number>();

  start(){

    this.intervalId = setInterval(() => {

      this.countFired.emit(this.count)
      this.count++

    },1000)
  }

  stop(){
    clearInterval(this.intervalId)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
