import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  clients: any ;
  shareProfit: any;

}

const ELEMENT_DATA: PeriodicElement [] = [
  {clients: 'client-1', shareProfit: 2},
  {clients: 'client-1', shareProfit: 6},
  {clients: 'client-1', shareProfit: 8 },
  {clients: 'client-1', shareProfit: 7},
  {clients: 'client-1', shareProfit: 8},
  {clients: 'client-1', shareProfit: 12},
  {clients: 'client-1', shareProfit: 13},
  {clients: 'client-1', shareProfit: 6},
  {clients: 'client-1', shareProfit: 7},
  {clients: 'client-1', shareProfit: 8}
];

@Component({
  selector: 'app-private-ltd',
  templateUrl: './private-ltd.component.html',
  styleUrls: ['./private-ltd.component.scss']
})
export class PrivateLtdComponent implements OnInit {
  displayedColumns: string[] = ['clients', 'shareProfit'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
