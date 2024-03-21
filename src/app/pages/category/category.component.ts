import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgForm } from '@angular/forms';
declare let $:any

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @ViewChild('categoryForm') categoryForm: NgForm | any;

  allCategoryData:any = [];
  modalLabel:string = '';
  addPathId:any;
  categoryFormObj:any = {
     parent:'',
     sequence_no:'',
     name:''
  }

  constructor(private service: ApiService){

  }

  ngOnInit():void{
    this.getCategoryData();
  }

  getCategoryData(){
    this.service.getApi().then((resp:any) => {
       this.allCategoryData = resp;
    }, (err) => {
       console.log(err);
    })
  }

  openCatModal(key:any, item:any){
    console.log(item.id);
    this.modalLabel = key;
   
    if(key == 'Add'){
      $('#category-modal').modal('show');
    }
    else if(key == 'Update'){
      this.categoryFormObj.parent = item.parent;
      this.categoryFormObj.sequence_no = item.sequence_no;
      this.categoryFormObj.name = item.name;
      $('#category-modal').modal('show');
    }
    else {
       this.addPathId = item.id;;
      this.categoryFormObj.parent = item.id;
      $('#category-modal').modal('show');
    }
  }

  closeModal(){
    $('#category-modal').modal('hide');
    this.categoryForm.resetForm();
  }

  addCategory(form:any){
    console.log("addid",this.addPathId)
    if(form.valid){
      // if(!this.addPathId){
      //   this.service.postApi(this.addPathId, this.categoryFormObj).then((res) => {
      //      console.log(res);
      //   }, (err) => {
      //      console.log(err);
      //   });
      // }
      // else{
        this.service.postApiforChild1(this.addPathId, this.categoryFormObj).then((res) => {
           console.log(res);
        }, (err) => {
            console.log(err);
        })
      // }
    }
  }

  udpateCategory(form:any){

  }

}
