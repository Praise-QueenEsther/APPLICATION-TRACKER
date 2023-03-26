import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})



export class MyProfileComponent {

  editCreated=false;
  projectsCreated=false;
  productCreated=false;
  documentsCreated=false;
  aboutMeCreated=false;



  onEdit(){
    this.editCreated=!this.editCreated
  }

  close(){
    this.editCreated=false;
  }
 
  closeProject(){
    this.projectsCreated=false;
  } 

  onProjects(){
    this. projectsCreated=!this. projectsCreated
  }

  closeProductDesign(){
    this. productCreated=false;
  } 

  onProductDesign(){
    this.productCreated=!this.productCreated
  }

  closeDocuments(){
    this.documentsCreated=false;
  } 

  onDocuments(){
    this.documentsCreated=!this.documentsCreated
  }

  closeAboutMe(){
    this.aboutMeCreated=false;
  } 

  onAboutMe(){
    this.aboutMeCreated=!this. aboutMeCreated
  }
}
