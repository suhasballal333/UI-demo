import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Idoctors } from '../interface';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   implements OnInit {
  constructor(  private http: HttpClient ) {}
   ngOnInit() {
}
   }
