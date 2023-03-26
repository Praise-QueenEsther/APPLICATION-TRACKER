import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'documents-modal',
  template: `
  
  <div class="Background-modal"></div>
  <div class="genCon">
  <main>
    <div class="mainDiv">
    
        
        <form >
            <div class="document">
            <p >Documents</p>
        </div>
            <div class="genDocDiv">
                <div class="firstPart">
                    
                    <input type="text" placeholder="Document">
                    <input type="text" placeholder="Document">
                    <input type="text" placeholder="Document">
                    <input type="text" placeholder="Document">
                    <input type="text" placeholder="Document">
                </div>

                    <div class="secPart">
                        <div class="file-icon">
                            <img src="../../../assets/file-icon.png" alt=""> UPLOAD FILE
                        </div>
                        <div class="file-icon">
                            <img src="../../../assets/file-icon.png" alt=""> UPLOAD FILE
                        </div>
                        <div class="file-icon">
                            <img src="../../../assets/file-icon.png" alt=""> UPLOAD FILE
                        </div>
                        <div class="file-icon">
                            <img src="../../../assets/file-icon.png" alt=""> UPLOAD FILE
                        </div>
                        <div class="file-icon">
                            <img src="../../../assets/file-icon.png" alt=""> UPLOAD FILE
                        </div>
                </div>
        
    </div>
    
    <br>
    <div class="btnDocu">
    <button type="submit">Save</button>
    </div>
    </form>
 
</div>
</main>



</div>
`,
  styles:[`
 
  .Background-modal{
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
  
    box-shadow: 5px 5px 4px rgba(19, 19, 19, 0.2);
    z-index: 5000;
    position: absolute;
    left: 30%;
    top: 25%;
  background-color:white;
  padding-left:15px;
  padding-right:15px;
  border-radius:6px;
} 


.mainDiv{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    flex-direction: column;
    width: 40vw;
    

}

.genDocDiv{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40vw;
}

.firstPart{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 28vw;
}

    .firstPart input{
   
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    border-radius: 6px;
    border: none;
    border: 1px solid #BDBDC7;
    border-radius: 6px;
    color: #5E5873
    
    
    
}

.secPart{
    display: flex;
    flex-direction: column;
    gap: 1.8vw;
}

.file-icon{
    
background: #E6E9EC;
border-radius: 5px;
gap: 2px;
font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    width: 10vw;
    border-radius: 6px;
    color: #5E5873;
}

.file-icon img{
    Width:
15.39px;
Height:
16.32px;
}

.document p{
    text-align: left;
    width: 112px;
    height: 29px;
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 28px;

    color: #5E5873
}

.btnDocu button{
    width: 79px;
    height: 30px;
    background: #440F7C;
    border-radius: 5px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    border: none;
    text-align: center;
    letter-spacing: 0.366667px;
    color: #FFFFFF; 
}

.btnDocu{
    margin-bottom:10px
}

`]

})

export class DocumentsModalComponent{
    documentsCreated=false;
    

      closeDocuments(){
        this. documentsCreated=!false;
      } 
    
    //   onProductDesign(){
    //     this.productCreated=!this.productCreated
    //   }
}