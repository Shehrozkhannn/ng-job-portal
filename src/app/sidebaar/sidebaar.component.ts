import { Component, OnInit } from '@angular/core';
import {newData} from 'filters';
import { MatDialog } from '@angular/material/dialog';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';

@Component({
  selector: 'app-sidebaar',
  templateUrl: './sidebaar.component.html',
  styleUrls: ['./sidebaar.component.css']
})
export class SidebaarComponent implements OnInit {

  data = newData;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
   
    
    
  }

  detailModal(){
    this.dialog.open(DetailModalComponent,{
      data: this.data.department
    });
  }

}
