import { Component, Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  @Input() data: any;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
