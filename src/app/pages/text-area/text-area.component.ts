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

  @ViewChild('editor', { static: false }) editor: ElementRef;
  onInput(event: Event) {
    this.content = (event.target as HTMLElement).innerHTML;
  }

  formatText(command: string, value?: string) {
    document.execCommand(command, false, value);
    this.editor.nativeElement.focus();
  }
}