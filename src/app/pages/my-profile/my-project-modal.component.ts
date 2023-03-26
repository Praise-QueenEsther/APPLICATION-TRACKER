import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'project-modal',
  template: `
  <div class="Background-modal"></div>
  <div class="genConPro">
<div class="majorConPro">
    <p class=".proInfo">Projects</p>
    <div class="inputGen">
        <div class="inputOne">
            <input type="text" placeholder="Project title">
        </div>
        <div class="inputTwo">
            <input type="text" placeholder="Project link">
        </div>
    </div>
    <div class="textArea">
        <textarea name="" id="" cols="30" rows="10" placeholder="Project description"></textarea>
    </div>
    <br>
    
    <div class="inputGen">
        <div class="inputOne">
            <input type="text" placeholder="Project title">
        </div>
        <div class="inputTwo">
            <input type="text" placeholder="Project link">
        </div>
    </div>
    <div class="textArea">
        <textarea name="" id="" cols="30" rows="10" placeholder="Project description"></textarea>
    </div>
    <div class="SaveEd">
        <div class="save">Save Edit</div>
        <div class="edit">+ Add</div>
    </div>
</div>
</div>

`,
  styles:[`
 
  .Background-modal{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    background-color:rgba(0, 0, 0, 0.5);

}


.genConPro{
    display: flex;
    justify-content:center;
    align-items:center;
   
    box-shadow: 5px 5px 4px rgba(19, 19, 19, 0.2);
    position:absolute;
    left:0;
    right:0;
    top:30vh;
    z-index: 5000;
  background-color:white;
  padding:20px;
  border-radius:6px;
  width: 50vw;
  margin:auto;
  transform:translateY(-20vh);

  
} 



.majorConPro{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 44vw;
  
    gap: 8px;
   
}

.inputGen{
    display: flex;
    flex-direction: row;
    width: 44vw;
    gap: 2vw;
    
}


.inputOne, .inputTwo{

    color: #5E5873;
    padding: 2px;
    font-family: 'Poppins';
    font-style: normal;

}

.inputOne input{
    width: 20vw;
    height: 4vh;
    border-radius: 6px;
    border: 1px solid #BDBDC7;

}

.inputOne input::placeholder{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    padding-left: 3px;
    color: #5E5873; 
}

.inputTwo input{
    width: 20vw; 
    height: 4vh;
    border-radius: 6px;
    border: 1px solid #BDBDC7;

}

.inputTwo input::placeholder{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    padding-left: 3px;

    color: #5E5873;
}

.textArea textarea{
    width:43vw ;
    height: 101px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    border-radius: 6px;
    border: 1px solid #BDBDC7;
    padding-left: 3px;
    color: #5E5873;

}

.SaveEd{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 44vw;
    margin-top: 20px;;
    
    
}

.save{
    padding: 6px;
    padding-top:10px ;
    padding-bottom:10px;
    width: 79px;
    background: #440F7C;
    border-radius: 5px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.366667px;
    color: #FFFFFF;
}

.edit{
    padding: 6px ;
    padding-top:9px ;
    padding-bottom:9px ;
    width: 79px;
    background: #F7D3EA;
    border: 1px solid #D62196;
    border-radius: 5px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.366667px;
    color: #D62196;
}

.proInfo{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 4px;
    color: #5E5873;
}
`]
 
})

export class MyProjectModalComponent{
    // projectsCreated=false;

    // closeProject(){
    //     this. projectsCreated=!false
    //   } 

    
}

