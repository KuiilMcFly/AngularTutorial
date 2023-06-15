import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dog-modal',
  templateUrl: './dog-modal.component.html',
  styleUrls: ['./dog-modal.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.3s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DogModalComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() descrizione: string | undefined;
  @Input() tipo: string | undefined;
  @Input() immagine: string | undefined;
  @Input() story: string | undefined;
  @Input() showComponent:boolean;
  @Input() dog: any;

  @Output() showComponentChange=new EventEmitter<any>();
  // Metodo che disattiva la variabile booleana
  
  hideComponente(value:any) {
    this.showComponent = value
    this.showComponentChange.emit(value)
  }

  OnClick() {
    console.log(this.dog, 'log di dog')
  }
  constructor() { }



  ngOnInit() {
  }
  @Input() items: Array<{razza: string, descrizione: string}>;
}
