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
  @Input() inputText: string;
  editable: boolean;

  isEditButtonVisible: boolean = true;

 
  
  


  openSecondModal() {
    this.showSecondModal = true;
    console.log('cliccato1');
    this.showComponentChange.emit(this.showSecondModal);
  }

  

  showAlert() {
    alert('ciao!');
  }

  log() {
   
    console.log(this.dog, 'dog');

    console.log(this.inputText, 'log' );
   
  }
  onSavedText(modifiedText: string) {
    this.inputText = modifiedText;
    this.dog.story = modifiedText; // Aggiorna il testo nel modello 'dog.story'
    this.editable = false;
  }

  saveChanges() {
    // Salva le modifiche al testo dog.story
    console.log('Modifiche salvate:', this.dog.Story);
    // Puoi aggiungere ulteriori logica o azioni qui
    
    this.editable = false;
  }

  hideComponente(value: any) {
    this.showComponent = value;
    this.showComponentChange.emit(value);
  }

  OnClick() {
    console.log(this.title, 'log di dog');
  }
  toggleEditButtonValue() {
    this.editable = true
    this.isEditButtonVisible = true;
  }

  constructor() {}

  ngOnInit() {}
}
