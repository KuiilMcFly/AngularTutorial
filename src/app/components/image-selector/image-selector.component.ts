import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-image-selector",
  templateUrl: "./image-selector.component.html",
  styleUrls: ["./image-selector.component.scss"],
})
export class ImageSelectorComponent implements OnInit {
  starImage = 1;
  gridImagesEnabled = false;
  gridSize = 1;
  images = [
    {
      src: "https://picsum.photos/550/400/?random",
      title: "Image 1",
      selected: false,
    },
    {
      src: "https://picsum.photos/550/401/?random",
      title: "Image 2",
      selected: false,
    },
    {
      src: "https://picsum.photos/550/402/?random",
      title: "Image 3",
      selected: false,
    },
    {
      src: "https://picsum.photos/550/403/?random",
      title: "Image 4",
      selected: false,
    },
    {
      src: "https://picsum.photos/550/404/?random",
      title: "Image 5",
      selected: false,
    },
    {
      src: "https://picsum.photos/550/405/?random",
      title: "Image 6",
      selected: false,
    },
    {
      src: "https://picsum.photos/550/406/?random",
      title: "Image 7",
      selected: false,
    },
    {
      src: "https://picsum.photos/550/407/?random",
      title: "Image 8",
      selected: false,
    },
    {
      src: "https://picsum.photos/550/408/?random",
      title: "Image 9",
      selected: false,
    },
    {
      src: "https://picsum.photos/550/409/?random",
      title: "Image 10",
      selected: false,
    },
  ];

  ngOnInit() {}
  selectedImages: any[] = [];
  gridColumns = 1;

  selectImage(image: any): void {
    if (
      this.gridColumns === 4 &&
      this.selectedImages.length >= 4 &&
      !image.selected
    ) {
      return;
    }
    if (this.gridColumns === 1) {
      this.selectedImages = [];
    }
    if (this.gridColumns === 2) {
      this.selectedImages = this.selectedImages.slice(-1);
    }

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

  setGrid(columns: number): void {
    this.gridColumns = columns;
    this.selectedImages = this.selectedImages.slice(0, columns);
  }
}
