import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community'; // Column Definitions Interface

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

checkboxData:any = [];
      // Row Data: The data to be displayed.
  // rowData:any = [
  //   { mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
  //   { mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
  //   { mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true }
  // ];

    // Column Definitions: Defines & controls grid columns.
    // colDefs: ColDef[] = [
    //   { field: "mission" },
    //   { field: "company" },
    //   { field: "location" },
    //   { field: "date" },
    //   { field: "price" },
    //   { field: "successful" },
    //   { field: "rocket" }
    // ];

    items = [
      { id: 1, name: 'Item 1', selected: true },
      { id: 2, name: 'Item 2', selected: false },
      // Add more items as needed
    ];

    secondItems = [
      { id: 1, name: 'Item 1', selected: false },
      { id: 2, name: 'Item 2', selected: false },
      { id: 1, name: 'Item 3', selected: false },
      { id: 2, name: 'Item 4', selected: false },
      { id: 1, name: 'Item 5', selected: false },
      { id: 2, name: 'Item 6', selected: false },
    ]
  
    updateCheckbox(item: any, isChecked: boolean) {
      item.selected = isChecked;
    }
  
    submitForm() {
      // Access the selected items
      const selectedItems = this.items.filter(item => item.selected);
      console.log('Selected Items:', selectedItems);
  
      // You can perform any other actions with the selected items here
    }

    onSubmit(form:any){
      console.log("checkbox form", form);
    }

    showName(control:any){
      console.log("cvontrol", control);
    }

    singleInput(val:any){
      console.log("single", val);
    }

    selectCheck(event:any){
      console.log("event>>> value", event.target.value);
      console.log("event checked", event.target.checked);
      let index = this.checkboxData.indexOf(event.target.value);

      if(event.target.checked){
        if(index == -1){
         this.checkboxData.push(event.target.value);

        }
      } else {
        this.checkboxData.splice(index,1);
      }
      console.log("chekcobxdata", this.checkboxData);
    }
}
