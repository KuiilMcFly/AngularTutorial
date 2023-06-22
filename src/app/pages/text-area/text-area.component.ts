import { Component, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-text-area.component',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent {
  
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