import { Component, OnInit, Input, Output, EventEmitter,ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TextAreaComponent } from 'src/app/pages/text-area/text-area.component';
@Component({
  selector: 'app-pagina-modale',
  templateUrl: './pagina-modale.component.html',
  styleUrls: ['./pagina-modale.component.scss'],
})
export class PaginaModaleComponent {
  @Input() showComponent: boolean;
  @Output() showComponentChange = new EventEmitter<boolean>();
  outputText: string = 'testo da modificare';

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


  savedSelection: Range;

  saveSelection() {
    const sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      this.savedSelection = sel.getRangeAt(0);
    }
  }

  restoreSelection() {
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(this.savedSelection);
  }

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

  undo() {
    document.execCommand('undo', false, null);
    this.editor.nativeElement.focus();
  }
  
  redo() {
    document.execCommand('redo', false, null);
    this.editor.nativeElement.focus();
  }

  clearEditor() {
    this.editor.nativeElement.innerHTML = '';
    this.editor.nativeElement.focus();
  }

  
changeFontSize() {
  this.formatText('fontSize', this.selectedFontSize);
  this.restoreSelection();
}
}