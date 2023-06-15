import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {
  @ViewChild('image', { static: false }) image: ElementRef;

  private scale = 1;
  private mouseX = 0;
  private mouseY = 0;

  private isDragging = false;
  private prevMouseX = 0;
  private prevMouseY = 0;



  onWheel(event: WheelEvent) {
    event.preventDefault();
    const delta = event.deltaY < 0 ? 1.1 : 0.9;
    this.scale *= delta;

    // Aggiungi queste due righe
    this.mouseX = event.offsetX;
    this.mouseY = event.offsetY;

    this.updateTransform();
  }

  //movimento mouse

onMouseDown(event: MouseEvent) {
  event.preventDefault();
  this.prevMouseX = event.clientX;
  this.prevMouseY = event.clientY;
  this.isDragging = true;
  this.image.nativeElement.classList.add('grabbing');
}

onMouseUp() {
  this.isDragging = false;
  this.image.nativeElement.classList.remove('grabbing');
}

onMouseMove(event: MouseEvent) {
  if (this.isDragging) {
    const deltaX = -(event.clientX - this.prevMouseX);
    const deltaY = -(event.clientY - this.prevMouseY);

    this.mouseX += deltaX;
    this.mouseY += deltaY;
    this.updateTransform();
  }

  this.prevMouseX = event.clientX;
  this.prevMouseY = event.clientY;
}

  private updateTransform() {
    const transform = `scale(${this.scale}) translate(${this.mouseX * (1 - this.scale)}px, ${this.mouseY * (1 - this.scale)}px)`;
    this.image.nativeElement.style.transform = transform;
  }
}
