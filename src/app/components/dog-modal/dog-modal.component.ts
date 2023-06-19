import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dog-modal',
  templateUrl: './dog-modal.component.html',
  styleUrls: ['./dog-modal.component.scss'],
})
export class DogModalComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() descrizione: string | undefined;
  @Input() tipo: string | undefined;
  @Input() immagine: string | undefined;
  @Input() story: string | undefined;
  @Input() showComponent: boolean;
  @Input() dog: any;
  @Input() showSecondModal: boolean;
  @Output() showComponentChange = new EventEmitter<any>();
  @Output() openSecondModalEvent = new EventEmitter<void>();
  
  openSecondModal() {
    this.showSecondModal = true;
    console.log('cliccato1');
  }

  hideComponente(value: any) {
    this.showComponent = value;
    this.showComponentChange.emit(value);
  }

  OnClick() {
    console.log(this.title, 'log di dog');
  }
  constructor() {}

  ngOnInit() {}
  @Input() items: Array<{ razza: string; descrizione: string }>;
}