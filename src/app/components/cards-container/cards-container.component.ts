import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss'],
})
export class CardsContainerComponent implements OnInit {

  @Input() showComponent: boolean;
  @Output() showComponentChange = new EventEmitter<any>();
  @Input() dog: any;
  @Output() selectedDog = new EventEmitter<any>();

  selectDog(ev: any) {
    this.selectedDog.emit(ev);
  }

  showComponente(value: any) {
    console.log('Hai cliccato');
    this.showComponent = value;
    this.showComponentChange.emit(value);
    this.selectedDog.emit(this.dog);
  }

  constructor() { }

  ngOnInit() { }

}
