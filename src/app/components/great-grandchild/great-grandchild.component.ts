import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from "@angular/core";


@Component({
  selector: "app-great-grandchild",
  templateUrl: "./great-grandchild.component.html",
  styleUrls: ["./great-grandchild.component.css"]
})
export class GreatGrandchildComponent implements OnInit, OnChanges {
  @Input() messageFromParent;
  @Input() isSendMessageDownButtonClicked;
  @Output() passDataToGrandchild = new EventEmitter();
  message: string = "";
  upstream: boolean;

  ngOnInit() { }

  handleClick(event) {
    setTimeout(() => {
      this.passDataToGrandchild.emit(this.message);
      this.upstream = true;
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
  
      if(changes['messageFromParent']){
        this.upstream = false;
      };
      
  }


}
