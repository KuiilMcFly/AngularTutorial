import { Component, Input, OnInit } from '@angular/core';


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
  ciao = 'ciao'
  OnClick(e:any){
    console.log(this.ciao,'Ho cliccato');
  }
  constructor() { }

  ngOnInit() {
  }

}
