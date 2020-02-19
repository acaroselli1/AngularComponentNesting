import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit, OnChanges{
  message: string;
  upstream: boolean;
  @Input() messageFromParent;
  @Input() isSendMessageDownButtonClicked;
  @Output() passDataToParent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  handleData(event) {
    this.message = event;
    setTimeout(() => {
      this.passDataToParent.emit(event);
      this.upstream = true;
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['messageFromParent']) {
      this.upstream = false;
    };

  }

 
}
