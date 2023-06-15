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

  onMouseMove(event: MouseEvent) {
    this.mouseX = event.offsetX;
    this.mouseY = event.offsetY;
    this.updateTransform();
  }

  onWheel(event: WheelEvent) {
    event.preventDefault();
    const delta = event.deltaY < 0 ? 1.1 : 0.9;
    this.scale *= delta;
    this.updateTransform();
  }

  private updateTransform() {
    const transform = `scale(${this.scale}) translate(${this.mouseX * (1 - this.scale)}px, ${this.mouseY * (1 - this.scale)}px)`;
    this.image.nativeElement.style.transform = transform;
  }
}
