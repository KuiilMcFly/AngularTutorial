import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagina-modale',
  templateUrl: './pagina-modale.component.html',
  styleUrls: ['./pagina-modale.component.scss']
})
export class PaginaModaleComponent implements OnInit {
  @Input() showComponent:boolean;
  @Output() showComponentChange=new EventEmitter<any>();


  hideComponente(value:any) {
    this.showComponent = value
    this.showComponentChange.emit(value)
  }
  constructor() { }

  ngOnInit() {
  }

}
