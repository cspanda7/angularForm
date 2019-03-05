import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  constructor() { }

  myDateValue=new Date();
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  //public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Secondary' },
      { item_id: 2, item_text: 'Graduate' },
      { item_id: 3, item_text: 'Post Graduate' },
      { item_id: 4, item_text: 'M.Phil.' },
      { item_id: 5, item_text: 'Ph.D.' },
      { item_id: 6, item_text: 'Diploma' },
      { item_id: 7, item_text: 'Others' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Post Graduate' },
      { item_id: 4, item_text: 'M.Phil.' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onSubmit(){

  }

}