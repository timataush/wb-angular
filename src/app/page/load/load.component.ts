// import { Component } from '@angular/core';
// import { PreloadingStrategy, Route } from '@angular/router';
// import { Observable, of } from 'rxjs';
//
// @Component({
//   selector: 'app-lazy-component',
//   standalone: true,
//   imports: [],
//   templateUrl: './load.component.html',
//   styleUrl: './load.component.scss'
// })
// export class LoadComponent {}


import { Component,OnInit,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-load',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss'],
})
export class LoadComponent implements OnInit {

  @Input() isVisible: boolean = true;

  ngOnInit(): void {

  //   const audio = new Audio('assets/sounds/loading-sound.mp3');
  //   audio.play();
  }
}
