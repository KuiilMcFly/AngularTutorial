import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-image-viewer",
  templateUrl: "./image-viewer.component.html",
  styleUrls: ["./image-viewer.component.scss"],
})
export class ImageViewerComponent implements OnInit {
  [x: string]: any;
  @Input() dog: any;
  @Input() immagine: string | undefined;

  isZoomed = false;
  pos = { top: 0, left: 0, x: 0, y: 0 };
  isHovered = false;

  @ViewChild("container", { static: true }) container: ElementRef;
  @ViewChild("img", { static: true }) img: ElementRef;

  onClick(e) {
    console.log(e.clientY, e.clientX);
    this.isZoomed = !this.isZoomed;
    if (this.isZoomed) {
      this.container.nativeElement.style.overflow = "hidden";
      this.img.nativeElement.style.width = "200%";
      this.img.nativeElement.style.cursor = "zoom-out";
      this.img.nativeElement.style.cursor = "zoom-out";
      this.img.nativeElement.style.left = `-${e.clientX}`;
      this.img.nativeElement.style.top = `-${e.clientY}`;
    } else {
      this.container.nativeElement.style.overflow = "hidden";
      this.img.nativeElement.style.width = "100%";
      this.img.nativeElement.style.cursor = "zoom-in";
    }
  }

  onMouseDown(e) {
    this.pos = {
      left: this.container.nativeElement.scrollLeft,
      top: this.container.nativeElement.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };
  }

  mouseMoveHandler(e) {
    const dx = (e.clientX - this.pos.x) * 2;
    const dy = (e.clientY - this.pos.y) * 3;

    this.container.nativeElement.scrollTop = this.pos.top - dy;
    this.container.nativeElement.scrollLeft = this.pos.left - dx;
  }

  onLeave() {
    this.container.nativeElement.style.overflow = "hidden";
    this.img.nativeElement.style.transform = "scale(1)";
    this.img.nativeElement.style.cursor = "zoom-in";
    this.isHovered = false;
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  currentImageIndex: number = 0; // Indice dell'immagine corrente
  images: any[] = [
    { src: "../../../assets//Dogs//labrador.jpg" },
    { src: "../../../assets//Dogs//bulldog.jpg" },
    { src: "../../../assets//Dogs//dalmata.png" },
    { src: "../../../assets//Dogs//carlino.jpg" },
    { src: "../../../assets//Dogs//bassotto.png" },
    { src: "../../../assets//Dogs//pastoretedesco.png" },
    // Aggiungi altre immagini all'array
  ];

  goToNextImage() {
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.images.length) {
      this.currentImageIndex = 0;
    }
    this.currentImageSrc = this.images[this.currentImageIndex].src;
  }



  constructor() {}

  ngOnInit() {}
}
