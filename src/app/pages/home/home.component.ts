import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dogRace = [
    {
    razza: 'Labrador',
    tipo: 'Riporto',
    descrizione: `E' un cane di costituzione robusta, raccolto e molto attivo. Ha un cranio largo, torace ampio e profondo, costole larghe e ben cerchiate. Il posteriore e il rene sono larghi e robusti, ha un ottimo temperamento ed è un cane molto agile. L'olfatto è eccellente, la bocca morbida e molto amante dell'acqua.`,
  },
  {
    razza:'BullDog',
    tipo: 'Cane ciccione',
    descrizione:`Il Bulldog Inglese arriva a circa 40 cm di altezza. La femmina pesa circa 23 kg e il maschio circa 25 kg. La pelle è lassa e cadente, con rughe profonde e pieghe spesse sul viso e sul collo, dove formano una giogaia. Il mantello è corto e di consistenza fine.`,
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
