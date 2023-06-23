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
     src: 'https://picsum.photos/500/900/?random',
     title: 'Image 1',
    },
    {
     src: 'https://picsum.photos/450/250/?random',
     title: 'Image 2',
    },
    {
     src: 'https://picsum.photos/5000/5000/?random',
     title: 'Image 3',
    },
    {
      src: 'https://picsum.photos/750/450/?random',
      title: 'Image 4',
     },
     {
      src: 'https://picsum.photos/1500/1000/?random',
      title: 'Image 5',
     },
     {
      src: 'https://picsum.photos/400/500/?random',
      title: 'Image 6',
     },
     {
      src: 'https://picsum.photos/600/850/?random',
      title: 'Image 7',
     },
     {
      src: 'https://picsum.photos/2000/2000/?random',
      title: 'Image 8',
     },
     {
      src: 'https://picsum.photos/3500/5000/?random',
      title: 'Image 9',
     },
     {
      src: 'https://picsum.photos/550/100/?random',
      title: 'Image 10',
     },
  ]
  selectedImages: any[] = [];
  gridImagesEnabled: boolean = false;

  toggleImageSelection(image: any) {
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

  isSelected(image: any): boolean {
    return this.selectedImages.includes(image);
  }

  gridImages() {
    this.gridImagesEnabled = !this.gridImagesEnabled;
  }

  constructor() { }

  ngOnInit() {
  }

}
