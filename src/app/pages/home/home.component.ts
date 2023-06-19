import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() selectedDog: any;
  showComponent = false;
  

  // Metodo che attiva la variabile booleana
  showComponente(dog: any) {
    this.showComponent = true;
    this.selectedDog = dog;
  }

  consolog(selectedDog) {
    console.log(selectedDog) 
  }
  selectDog(ev){
    this.selectedDog = ev
  }

  showSecondModal: boolean = false;

onOpenSecondModal() {
  this.showSecondModal = true;
}

  dogRace = [
    {
    razza: 'Labrador',
    tipo: 'Riporto',
    descrizione: `E' un cane di costituzione robusta, raccolto e molto attivo. Ha un cranio largo, torace ampio e profondo, costole larghe e ben cerchiate. Il posteriore e il rene sono larghi e robusti, ha un ottimo temperamento ed è un cane molto agile. L'olfatto è eccellente, la bocca morbida e molto amante dell'acqua.`,
    immagine: '../../../assets/Dogs/labrador.jpg',
    story: `Fedele, dolce, socievole e incredibilmente paziente: il Labrador è il compagno di giochi ideale per un bimbo. Con il suo carattere da vero gentiluomo sa conquistarsi facilmente un posto privilegiato in famiglia e, probabilmente, sul divano, anche se la sua vera passione - come è noto - è l'acqua: non sa resistere all'istinto di bagnarsi e nuotare, il che fa la gioia dei bambini durante le vacanze estive, che trovano nel loro fedele amico a quattro zampe un eccezionale compagno di bagni al mare, al lago o al fiume.`,
  },
  {
    razza:'BullDog',
    tipo: 'Cane ciccione',
    descrizione:`Il Bulldog Inglese arriva a circa 40 cm di altezza. La femmina pesa circa 23 kg e il maschio circa 25 kg. La pelle è lassa e cadente, con rughe profonde e pieghe spesse sul viso e sul collo, dove formano una giogaia. Il mantello è corto e di consistenza fine.`,
    immagine: '../../../assets/Dogs/bulldog.jpg',
    story:`Questo cane di natura affettuosa ama i bambini e imparerà anche ad andare d'accordo con altri animali domestici se viene loro presentato in giovane età. Il Bulldog oggi è un po' troppo amichevole per essere un buon cane da guardia ma difenderebbe un membro della famiglia in difficoltà. Può essere pacifico, audace, leale, coraggioso e riunisce l’impressione di determinazione, forza e attività.`,
  },
  {
    razza: 'Dalmata',
    tipo:'Cane bello',
    descrizione: `Il Dalmata è un cane grazioso di taglia media, con un corpo agile e muscoloso. La coda è abbastanza lunga e presenta una leggera curva rivolta verso l'alto. Il mantello è corto e denso, con macchie marroni o nere su bianco. Perde molto pelo, nonostante il mantello sia corto.`,
    immagine:'../../../assets/Dogs/dalmata.png',
    story:`La razza Dalmata è amichevole ed estroversa, ma se non sono sufficientemente allenati possono diventare iperattivi. I Dalmata sono leali e vogliono sempre compiacere il proprio padrone; amano giocare e stare in compagnia. Tuttavia, la loro forza e resistenza possono a volte rappresentare una sfida per i proprietari. I Dalmata impiegano normalmente due anni prima di completare lo sviluppo- spesso anche di più!`,
  },
  {
    razza: 'Carlino',
    tipo: 'Muso nero',
    descrizione: `Il carlino è un cane da compagnia molossoide di piccola taglia brachicefalo, ovvero col muso schiacciato. In generale, questa razza presenta un aspetto piuttosto robusto e compatto ed è solita muoversi con le gambe parallele ed un passo dondolante. Il mantello è corto, liscio, morbido e lucente.`,
    immagine: '../../../assets/Dogs/carlino.jpg',
    story:`Questo adorabile cane Toy è di buon carattere, un compagno felice e socievole. Questi cagnolini hanno grandi personalità. Il Carlino è amato sia dagli adulti che dai piccini. Può essere calmo e tranquillo, ma può anche avere i suoi momenti birichini e maliziosi. Un super compagno se puoi offrirgli il tempo di cui ha bisogno - non gli piace essere separato dai suoi cari per troppo tempo.`,
  },
  {
    razza: 'Bassotto',
    tipo: 'Cane basso',
    descrizione: `Il cane Bassotto Tedesco è un esemplare di taglia piccola che al garrese può arrivare ad un'altezza che varia tra i 15 ed i 35 cm per un peso ideale compreso tra 3 e 8 kg, bisogna sempre ricordarsi che esistono eccezioni dato che qualche esemplare è arrivato al''incredibile peso di 10 kg.`,
    immagine: '../../../assets/Dogs/bassotto.png',
    story:`Il Bassotto a pelo lungo presenta un mantello liscio e brillante, dotato di sottopelo, aderente, si allunga sotto il collo, nella parte inferiore del corpo e raggiunge la sua massima estensione nella parte inferiore della coda, dove forma una frangia a bandiera. I colori più diffusi sono fulvo o nero focato nel pelo corto; Bassottocolor cinghiale nel pelo duro e rosso mogano nei peli lunghi.`,
  },
  {
    razza: 'Pastore Tedesco',
    tipo: 'Cane da guardia',
    descrizione: `Il Cane da Pastore tedesco è di media taglia, leggermente allungato, forte e molto muscoloso, con ossatura asciutta e struttura solida. Le sue proporzioni più importanti sono: l'altezza al garrese per i maschi: da 60 a 65 cm, per le femmine da 55 a 60 cm.`,
    immagine: '../../../assets/Dogs/pastore2.jpg',
    story:`Il Pastore Tedesco sviluppa un legame molto stretto con il padrone con il quale e vorrà stare il più possibile. Sebbene questa razza abbia bisogno di molta attenzione, è un cane molto leale con grande attitudine alla difesa e incorruttibile. E’ importante quindi socializzare il prima possibile il cane per avere un Pastore Tedesco equilibrato, altrimenti ci saranno problemi di fiducia e insicurezza. `,
  },
  ];
  constructor() { }

  ngOnInit() {
  }

}
