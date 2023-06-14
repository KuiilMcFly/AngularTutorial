import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedDog: any;
  showComponent = false;

  // Metodo che attiva la variabile booleana
  showComponente() {
    this.showComponent = true;
    
  }

  consolog() {
    console.log(this.showComponent) 
  }
  

  dogRace = [
    {
    razza: 'Labrador',
    tipo: 'Riporto',
    descrizione: `E' un cane di costituzione robusta, raccolto e molto attivo. Ha un cranio largo, torace ampio e profondo, costole larghe e ben cerchiate. Il posteriore e il rene sono larghi e robusti, ha un ottimo temperamento ed è un cane molto agile. L'olfatto è eccellente, la bocca morbida e molto amante dell'acqua.`,
    immagine: '../../../assets/Dogs/labrador.jpg',
  },
  {
    razza:'BullDog',
    tipo: 'Cane ciccione',
    descrizione:`Il Bulldog Inglese arriva a circa 40 cm di altezza. La femmina pesa circa 23 kg e il maschio circa 25 kg. La pelle è lassa e cadente, con rughe profonde e pieghe spesse sul viso e sul collo, dove formano una giogaia. Il mantello è corto e di consistenza fine.`,
    immagine: '../../../assets/Dogs/bulldog.jpg',
  },
  {
    razza: 'Dalmata',
    tipo:'Cane bello',
    descrizione: `Il Dalmata è un cane grazioso di taglia media, con un corpo agile e muscoloso. La coda è abbastanza lunga e presenta una leggera curva rivolta verso l'alto. Il mantello è corto e denso, con macchie marroni o nere su bianco. Perde molto pelo, nonostante il mantello sia corto.`,
    immagine:'../../../assets/Dogs/dalmata.png',
  },
  {
    razza: 'Carlino',
    tipo: 'Muso nero',
    descrizione: `Il carlino è un cane da compagnia molossoide di piccola taglia brachicefalo, ovvero col muso schiacciato. In generale, questa razza presenta un aspetto piuttosto robusto e compatto ed è solita muoversi con le gambe parallele ed un passo dondolante. Il mantello è corto, liscio, morbido e lucente.`,
    immagine: '../../../assets/Dogs/carlino.jpg',
  },
  {
    razza: 'Bassotto',
    tipo: 'Cane basso',
    descrizione: `Il cane Bassotto Tedesco è un esemplare di taglia piccola che al garrese può arrivare ad un'altezza che varia tra i 15 ed i 35 cm per un peso ideale compreso tra 3 e 8 kg, bisogna sempre ricordarsi che esistono eccezioni dato che qualche esemplare è arrivato al''incredibile peso di 10 kg.`,
    immagine: '../../../assets/Dogs/bassotto.png'
  },
  {
    razza: 'Pastore Tedesco',
    tipo: 'Cane da guardia',
    descrizione: `Il Cane da Pastore tedesco è di media taglia, leggermente allungato, forte e molto muscoloso, con ossatura asciutta e struttura solida. Le sue proporzioni più importanti sono: l'altezza al garrese per i maschi: da 60 a 65 cm, per le femmine da 55 a 60 cm.`,
    immagine: '../../../assets/Dogs/pastore2.jpg',
  },
  ];
  constructor() { }

  ngOnInit() {
  }

}
