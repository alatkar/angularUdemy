import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
  //inputs: ['isFav'] //input Method 2 (component metadata)
})
export class FavComponent implements OnInit {

  @Input('message') message: string; //Input Method 1
  @Input('isFav') isFav: boolean; //Input Method 1
  @Input('count') count: number; //Input Method 1
  @Output('change') change = new EventEmitter();
  //isFav: boolean;

  isActive= true;
  constructor() {this.isActive = this.isFav; }

  ngOnInit() {
  }

  onClick()
  {
    this.isFav = !this.isFav;
    this.isActive = this.isFav;
    this.count = this.count + 1;
    this.change.emit({isFav : this.isFav, oldVal : !this.isFav, count: this.count});
  }
}

export interface FavChangeEventArgs
{
  isFav: boolean,
  oldVal: boolean,
  count: number
}