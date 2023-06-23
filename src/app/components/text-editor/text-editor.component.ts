import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output, SimpleChanges} from '@angular/core';
import { MatDialog } from '@angular/material';
import { CustomActionModalComponent } from '../custom-action-modal/custom-action-modal.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  dogStory: string = '';
  content: string;
  selectedColor: string = '#000000';
  selectedFontSize: string = '3';
  @Input() inputText: string;
  @Input() editable: boolean;
  savedSelection: Range;
  @Input() modifiedText: string;
  @Output() saveChanges = new EventEmitter<string>();
 



  onInput(event: Event) {
    this.modifiedText = (event.target as HTMLElement).innerHTML;
  }

  savedText() {
    const editorContent = this.editor.nativeElement.innerHTML;
    this.saveChanges.emit(editorContent);
    this.editable = false;
  }
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
 

  ngOnChanges(changes: SimpleChanges) {
    if (changes.inputText && !changes.inputText.isFirstChange()) {
      if (!this.editable) {
        const editor = this.editor.nativeElement;
        editor.innerHTML = this.inputText;
      }
    }
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

  customActionUpperCase() {
    const selectedText = window.getSelection().toString();
    const upperCaseText = selectedText.toUpperCase();
    document.execCommand('insertText', false, upperCaseText);
  }

  
changeFontSize() {
  this.formatText('fontSize', this.selectedFontSize);
  this.restoreSelection();
}

constructor(private sanitizer: DomSanitizer) { }


applyCustomAction(customAction) {
  customAction.action();
}

ngOnInit(): void {
console.log(this.inputText);

}

}
