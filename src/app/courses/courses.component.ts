import { Component, OnInit } from '@angular/core';
import { FavChangeEventArgs } from 'app/fav/fav.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  tweets= [
    {message:"Tweet 1", IsFav:false, count:3}, 
    {message:"Tweet 2", IsFav:true, count:2}, 
    {message:"Tweet 3", IsFav:true, count:11}
];
  
  course = {
    title: "Udemy Angular course",
    rating: 4.9745,
    price: 190.97,
    students: 30123,
    releaseDate: new Date(2017, 11, 23)
  }

  email = "atul@atul.com";
  isActive = true;
  constructor() { }

  onSave($event){
    event.stopPropagation();
    console.log("Button clicked ", $event);
  }

  onSaveDiv($event){
    console.log("Div clicked ", $event);
  }

  onKeyUp($event){
    console.log($event.target.value);
    console.log("Keyup ", $event.keyCode);
    if($event.keyCode === 13)
      console.log("Enter pressed ", $event.keyCode);
  }

  onKeyUpNew(event){
    console.log("onKeyUpNew ", event);
  }

  onKeyUpNew1(){
    console.log("onKeyUpNew ", this.email);
  }

  onKeyUpCasing(){

  }

  ngOnInit() {
  }

  onFavChange(event: FavChangeEventArgs){
    //onsole.log("Fav changed " + event); //Doesn't print object
    console.log("Fav changed ", event.isFav, event.oldVal, event.count);
  }

}
