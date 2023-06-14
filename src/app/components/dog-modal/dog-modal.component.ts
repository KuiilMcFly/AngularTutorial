import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dog-modal',
  templateUrl: './dog-modal.component.html',
  styleUrls: ['./dog-modal.component.scss']
})
export class DogModalComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() descrizione: string | undefined;
  @Input() tipo: string | undefined;
  @Input() immagine: string | undefined;
  @Input() showComponent:boolean;
  @Input() dog: any;

  @Output() showComponentChange=new EventEmitter<any>();
  // Metodo che disattiva la variabile booleana
  
  hideComponente(value) {
    this.showComponent = value
    this.showComponentChange.emit(value)
  }
  constructor() { }

  ngOnInit() {
  }

}
