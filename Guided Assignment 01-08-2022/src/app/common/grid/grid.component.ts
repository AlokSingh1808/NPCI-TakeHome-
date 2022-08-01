import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { GridService } from 'src/app/services/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  items = this.gridService.getItems()
  constructor(private gridService : GridService) { }

  ngOnInit(): void {
  }

  clearGrid(){
    this.items = [];
    return this.items; 
  }

}
