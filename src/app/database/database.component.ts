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
  
  update(id, lastName, firstName, email, comments, option) {

    let lastname  = { lastName : lastName };
    let firstname = { firstName: firstName };
    let Email     = { email    : email };
    let Comments  = { comments : comments };
    let Option    = { options  : option };

    console.log(lastName, firstName, Email, Comments);

    this.database.update(id, lastname, firstname, Email, Comments, Option);
  }

  delete(id){
    this.database.delete(id);
  }
}
