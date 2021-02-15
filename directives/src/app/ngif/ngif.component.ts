import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  showUsers: boolean = true
  users: string[] = []

  onShowUsers() {
    this.showUsers = !this.showUsers
  }
  constructor() { }

  ngOnInit(): void {
  }

}
