import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss'],
  
})
export class CardsContainerComponent implements OnInit {

  @Input() showComponent:boolean;
  @Output() showComponentChange=new EventEmitter<any>();
  @Input() dog: any;
  @Output() selectedDog=new EventEmitter<any>();
  

  showComponente(value:any) {
    console.log('hai cliccato');
    this.showComponent = value
    this.showComponentChange.emit(value)
    this.selectedDog.emit(this.dog)
  }
 
  
@Input() items: Array<{razza: string, descrizione: string}>;
  
  constructor() { }

  ngOnInit() {

  }

}
