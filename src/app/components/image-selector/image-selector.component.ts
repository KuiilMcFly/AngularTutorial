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
     title: 'Titolo 1',
    },
    {
     src: 'https://picsum.photos/450/250/?random',
     title: 'Titolo 2',
    },
    {
     src: 'https://picsum.photos/5000/5000/?random',
     title: 'Titolo 3',
    },
    {
      src: 'https://picsum.photos/750/450/?random',
      title: 'Titolo 4',
     },
     {
      src: 'https://picsum.photos/1500/1000/?random',
      title: 'Titolo 5',
     },
     {
      src: 'https://picsum.photos/400/500/?random',
      title: 'Titolo 6',
     },
     {
      src: 'https://picsum.photos/600/850/?random',
      title: 'Titolo 7',
     },
     {
      src: 'https://picsum.photos/2000/2000/?random',
      title: 'Titolo 8',
     },
     {
      src: 'https://picsum.photos/3500/5000/?random',
      title: 'Titolo 9',
     },
     {
      src: 'https://picsum.photos/550/100/?random',
      title: 'Titolo 10',
     },
  ]

  constructor() { }

  ngOnInit() {
  }

}
