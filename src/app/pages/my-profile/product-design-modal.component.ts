import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-design-modal',
  template: `
  <div class="Background-modal"></div>
 
  <div class="genCon">
 
    
  <div class="majorConPro">
    <div class="genWrite">
      <p class="ProDes"> Product Designer </p>
      <p class="PerIn"> PERSONAL INFORMATION </p> 
  </div>
<form action="" class="theform">
 

  <div class="row">
      <label> Picture profile</label>
      <div class="file-icon">
      <img src="../../../assets/file-icon.png" alt=""> UPLOAD FILE
      </div>
     
  </div>
 
  <div class="row">
      <label for="">Full name</label>
      <input type="text">
  </div>
  <div class="row">
      <label for="">Phone</label>
      <input type="text">
  </div>
  <div class="row">
      <label for="">Email</label>
      <input type="text">
  </div>
  <div class="row">
      <label for="">Birthday</label>
      <input type="text">
  </div>
  <div class="row">
      <label for="">Address</label>
      <input type="text">
  </div>

  <div class="row">
      <label for="">Gender</label>
      <input type="text">
  </div>

  <div class="row">
      <label for="">Location</label>
      <input type="text">
  </div>
  <div class="row">
      <label for="">Skills</label>
      <input type="text">
  </div>
  <div class="row">
      <label for="">Tool</label>
      <input type="text">
  </div>

  <div class="save-btn">
      <button>Save Edit</button>
  </div>
  </form>
</div>

 
</div>
`,
  styles:[`
 
  .Background-modal{
      
    display:flex;
    align-items:center;
    justify-content:center;
    margin:auto;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
  
    background-color:rgba(0, 0, 0, 0.5);
}

.genCon{
    display: flex;
    justify-content:center;
    align-items:center;
   height:95vh;
   width:35vw;
    box-shadow: 5px 5px 4px rgba(19, 19, 19, 0.2);
   
    position:absolute;
  
   right:30%;
    top:30vh;
  background-color:white;
  padding-left:15px;
  padding-right:15px;
  border-radius:6px;
 transform:translateY(-20vh);
 
  

  
} 


.majorConPro{
    
    
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin:auto;
  }
  

 .row{
    display: table-row;
   
    
} 
.row label{
    display: table-cell;
    text-align: left;  
   padding:8px;
    
     font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #5E5873;

}

.row input{
   
    padding: 1px;
    width: 20vw;
    height: 5vh;
    border-radius: 6px;
    font-style: normal;
    border: 1px solid #BDBDC7;
    border-radius: 5px;
    color: #5E5873;
}

.file-icon img{
    width:15.39px;
    height:13.32px;
    padding-top: 3px; 
}

.file-icon{
    width: 120px;
    background: #E6E9EC;
    border-radius: 5px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #5E5873;
    line-height: 21px;
    
}

.save-btn{
    text-align: center;
  
}

.save-btn button{
    background: #440F7C;
    padding: 7px;
    border: none;
    color: #FFFFFF;
    border-radius: 5px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    margin-top:10px
}

.ProDes{
   
  
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #5E5873;
}

.PerIn {
    

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #5E5873; 
}

 
 


`]

})

export class ProductDesignModalComponent{
    // productCreated=false;
    
   

    //   closeProductDesign(){
    //     this.productCreated=!false;
    //   } 
    
    //   onProductDesign(){
    //     this.productCreated=!this.productCreated
    //   }
}