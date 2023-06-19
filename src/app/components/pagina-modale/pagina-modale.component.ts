import { Component, OnInit, Input, Output, EventEmitter,ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-pagina-modale',
  templateUrl: './pagina-modale.component.html',
  styleUrls: ['./pagina-modale.component.scss'],
})
export class PaginaModaleComponent implements OnInit {
  @Input() showComponent: boolean;
  @Output() showComponentChange = new EventEmitter<boolean>();

  closeModal() {
    this.showComponent = false;
    this.showComponentChange.emit(false);
  }

  hideComponente(value: any) {
    this.showComponent = value;
    this.showComponentChange.emit(value);
  }

  content: string;
  selectedColor: string = '#000000';
  selectedFontSize: string = '3';

  @ViewChild('editor', { static: false }) editor: ElementRef;
  onInput(event: Event) {
    this.content = (event.target as HTMLElement).innerHTML;
  }


  formatText(command: string, value?: string) {
    document.execCommand(command, false, value);
    this.editor.nativeElement.focus();
  }

  insertNodeAtCaret(node: Node) {
    const sel = window.getSelection();
    if (sel && sel.rangeCount) {
      const range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(node);
    }
  }
  createTable() {
    const table = document.createElement('table');
    table.setAttribute('style', 'border-collapse: collapse;');
  
    const rowsInput = prompt('Inserisci il numero di righe:', '2');
    const colsInput = prompt('Inserisci il numero di colonne:', '2');
  
    const rows = parseInt(rowsInput, 10);
    const cols = parseInt(colsInput, 10);
  
    if (rows && cols) {
      for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
          const cell = document.createElement('td');
          cell.innerHTML = '&nbsp;';
          cell.setAttribute('style', 'border: 1px solid black; padding: 5px;');
          row.appendChild(cell);
        }
        table.appendChild(row);
      }
      this.insertNodeAtCaret(table);
    }
  }
  constructor() {}

  ngOnInit() {}
}