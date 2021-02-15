import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngif-ngfor',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  showUsers: boolean = true
  users: string[] = ['Antonella', 'Leandro', 'Josué', 'José', 'Maria', 'Micaela', 'Eduarda']

  onShowUsers() {
    this.showUsers = !this.showUsers
  }
  constructor() { }

  ngOnInit(): void {
  }

}
