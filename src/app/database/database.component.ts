import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.services';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  public  people = [];

  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.getListInfo().subscribe(data => this.people = data);
  }

  refresh(){
    this.database.getListInfo().subscribe(data => this.people = data);
  }
  
}
