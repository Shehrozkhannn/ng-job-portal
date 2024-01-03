import { Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  getData(event: any){
    this.data = event
  }

}
