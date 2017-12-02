import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    {id:1 , name: 'Email'},
    {id:1 , name: 'Post'},

  ];

  constructor() { }

  ngOnInit() {
  }

  OnClick(val)
  {
    console.log(val)

  }

  Submit(f){
    console.log(f);
  }
}
