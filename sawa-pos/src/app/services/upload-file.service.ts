import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private basePath = '/uploads';

  constructor( private fireStore:AngularFirestore,private storage: AngularFireStorage) { }
  
  uplodeFile(file:File){
   
    return new Promise ((resolve,rejects)=>{

      let ref = this.storage.ref('uploads/'+file.name);

      ref.put(file).then(() => { 
          //successful uplode file
          ref.getDownloadURL().subscribe( fileURL =>{
          //add file uploaded to fire base store
            this.fireStore.collection(this.basePath).add({
               name:file.name,
               fileURL
            }).then((msg)=>resolve(msg))
              .catch((msg)=>rejects(msg));
              
          },
          ((err)=>{rejects(err)})); 

      }).then((msg)=>resolve(msg))
      .catch((msg)=>rejects(msg));

    });
  
  }

}
