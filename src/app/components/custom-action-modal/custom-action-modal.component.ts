import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-action-modal',
  templateUrl: './custom-action-modal.component.html',
  styleUrls: ['./custom-action-modal.component.scss'],
})
export class CustomActionModalComponent {
  customActions: any[] = [
    { name: 'Azione 1' },
    { name: 'Azione 2' },
    { name: 'Azione 3' },
  ];
  selectedCustomAction: any;

  isModalOpen = false;

 

  applyAction() {
    console.log('Azione applicata:', this.selectedCustomAction);
    // Puoi eseguire le azioni desiderate qui
  }
}