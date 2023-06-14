import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss'],
  
})
export class CardsContainerComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() descrizione: string | undefined;
  @Input() tipo: string | undefined;
  @Input() immagine: string | undefined;
  @Input() showComponent:boolean;
  @Output() showComponentChange=new EventEmitter<any>();
 

  showComponente(value:any) {
    console.log('hai cliccato');
    this.showComponent = value
    this.showComponentChange.emit(value)
  }
 
  

  
  constructor() { }

  ngOnInit() {
  }

}
