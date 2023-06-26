import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.scss']
})
export class ImageSelectorComponent implements OnInit {
starImage = 1
  Image = [
    {
     src: 'https://picsum.photos/550/400/?random',
     title: 'Image 1',
     selected: false
    },
    {
     src: 'https://picsum.photos/550/401/?random',
     title: 'Image 2',
     selected: false
    },
    {
     src: 'https://picsum.photos/550/402/?random',
     title: 'Image 3',
     selected: false
    },
    {
      src: 'https://picsum.photos/550/403/?random',
      title: 'Image 4',
      selected: false
     },
     {
      src: 'https://picsum.photos/550/404/?random',
      title: 'Image 5',
      selected: false
     },
     {
      src: 'https://picsum.photos/550/405/?random',
      title: 'Image 6',
      selected: false
     },
     {
      src: 'https://picsum.photos/550/406/?random',
      title: 'Image 7',
      selected: false
     },
     {
      src: 'https://picsum.photos/550/407/?random',
      title: 'Image 8',
      selected: false
     },
     {
      src: 'https://picsum.photos/550/408/?random',
      title: 'Image 9',
      selected: false
     },
     {
      src: 'https://picsum.photos/550/409/?random',
      title: 'Image 10',
      selected: false
     },
  ]
  selectedImages: any[] = [];
  gridImagesEnabled: boolean = false;

  toggleImageSelection(image: any) {
    if (!this.gridImagesEnabled) {
      this.Image.forEach((img) => {
        img.selected = (img === image);
      });
      this.selectedImages = [image];
    } else {
      image.selected = !image.selected;
      if (image.selected) {
        this.selectedImages.push(image);
      } else {
        const index = this.selectedImages.indexOf(image);
        if (index !== -1) {
          this.selectedImages.splice(index, 1);
        }
      }
    }
  }

  zoomLevel: number = 1;

  zoomIn() {
    if (!this.gridImagesEnabled) {
      this.zoomLevel += 0.1;
    }
  }

  zoomOut() {
    if (!this.gridImagesEnabled && this.zoomLevel > 0.1) {
      this.zoomLevel -= 0.1;
    }
  }

  isSelected(image: any): boolean {
    return this.selectedImages.includes(image);
  }

  gridImages() {
    this.gridImagesEnabled = !this.gridImagesEnabled;
  }

  constructor() {}

  ngOnInit() {
  }

}
