import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  users: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
