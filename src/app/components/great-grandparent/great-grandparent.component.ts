import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-great-grandparent',
  templateUrl: './great-grandparent.component.html',
  styleUrls: ['./great-grandparent.component.css']
})
export class GreatGrandparentComponent implements OnInit {
  message: string;
  upstream: boolean;
  downstream: boolean;
  downstreamMessage: string;
  downstreamMessageGreatGrandparent: string;
  isSendMessageDownButtonClicked:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  handleData(event) {
    this.message = event;
    this.upstream = true;
  }

  handleClick(event) {
    this.isSendMessageDownButtonClicked = true;
    this.upstream = false;
    setTimeout(() => {
      this.downstreamMessage = this.downstreamMessageGreatGrandparent
    }, 1000)
  }
}

 


  



  