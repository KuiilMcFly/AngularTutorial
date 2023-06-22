import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-selected',
  templateUrl: './image-selected.component.html',
  styleUrls: ['./image-selected.component.scss']
})  
export class ImageSelectedComponent implements OnInit {
  selectedDog: string;
  @Input() dog: string;
  images: string[] = [];
  currentImageIndex: number = 0;
  selectedImage: string;
  constructor(private route: ActivatedRoute, private router: Router) { }
  goToNextImage() {
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.images.length) {
      this.currentImageIndex = 0;
    }
    const selectedImage = this.images[this.currentImageIndex];
    this.router.navigate(['/image-selected'], { queryParams: { image: selectedImage } });
  }
  
  goToPreviousImage() {
    this.currentImageIndex--;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
    }
    const selectedImage = this.images[this.currentImageIndex];
    this.router.navigate(['/image-selected'], { queryParams: { image: selectedImage } });
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedImage = params['image'];
    });
  }

}
