import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {jobs} from 'jobs'
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hidden = false;
  jobs = jobs;
  @Output() newData = new EventEmitter<any>();

  constructor() { 
    
  }

  ngOnInit(): void {
    this.searchJobs('');
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  searchJobs(event : any){
    let data;
    if(event && event.target.value){
      data = this.jobs.filter(item => item.name.toLowerCase().startsWith(event.target.value));
    }else{
      data = this.jobs;
    }
    this.newData.emit(data);
  }

}
