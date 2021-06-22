import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  selectedFile:any ;
  successMessage:string ='';
  errorMessage:string ='';

  constructor(
    private uploadFileService:UploadFileService) {
  }
   
  ngOnInit(): void {
    
  }

  onFileSelected(event: any){
    this.selectedFile= <File> event.target.files[0];
    console.log(this.selectedFile);
  }
  
  onSubmit(){
    let file= this.selectedFile;
    this.uploadFileService.uplodeFile(file)
    .then((msg) => {
         console.log("Successful: "+msg);
         this.successMessage= ''+ msg;
         this.errorMessage='';
    })
    .catch((err)=>{
      console.log("reject: "+err);
       this.errorMessage=''+err;
       this.successMessage='';
    }); 
    
  }

}
