import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'profile-modal',
  template: `
  
  <div class="Background-modal"></div>
  <div class="genCon">
  <div class="majorDiv">
        <form>
          <div class="eduInfo"><p>Education Information</p> </div>
          <div class="GeninputDiv">
              <div class="firstSet">
                  <div class="firstInput">
                      <input type="text" placeholder="School">
                      <input type="text" placeholder="Start Date">
                  </div>
                  <div class="firstInput">
                      <input type="text" placeholder="School">
                      <input type="text" placeholder="Start Date">
                  </div>
                  <div class="firstInput">
                      <input type="text" placeholder="School">
                      <input type="text" placeholder="Start Date">
                  </div>
              </div>
              <div class="secondSet">
                  <div class="firstInput">
                      <input type="text" placeholder="Course">
                      <input type="text" placeholder="End Date">
                  </div>
                  <div class="firstInput">
                      <input type="text" placeholder="Course">
                      <input type="text" placeholder="End Date">
                  </div>
                  <div class="firstInput">
                      <input type="text" placeholder="Course">
                      <input type="text" placeholder="End Date">
                  </div>
              </div>
          </div>
          <div class="SaveEd">
              <div class="save">Save Edit</div>
              <div class="edit">+ Add</div>
      
          </div>
          </form>
      

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
  
    background-color:rgba(0, 0, 0, 0.5);
}

.genCon{
    display: flex;
    justify-content:center;
    align-items:center;
    box-shadow: 5px 5px 4px rgba(19, 19, 19, 0.2);
    position: absolute;
    left: 30%;
    top: 10%;
    z-index: 5000;
  background-color:white;
  padding-left:15px;
  border-radius:6px;

  
} 



.GeninputDiv{
    display: flex;
    align-items: center;
    justify-content: center;
 
    
}

.eduInfo{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 4px;
    color: #5E5873;
}

.firstSet,.secondSet{
    display: flex;
    flex-direction: column;
    gap: 35px;
}

.firstInput{
    display: flex;
    flex-direction: column;
    gap: 15px;
    

}

.firstInput input{
    width: 20vw;
    height: 5vh;
    border: 1px solid #BDBDC7;
    border-radius: 6px;
    margin-right: 15px;
}

.firstInput input::placeholder{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    padding-left:3px ;
    color: #5E5873;
}

.SaveEd{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
    margin-bottom:10px;
    padding-right:20.5px;
 
}

.save{
    padding: 6px;
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
}`]
//   styleUrls:['./profile-modal.component.css'
// .majorDiv{
//     display: flex;
//     align-items: center;
//     flex-direction: column;
   
  
// }

// .genCon{
//     display: flex;
//     justify-content:center;
//     align-items:center;
//     position: absolute;
//     right:25%;
//     box-shadow: 2px 2px 4px grey;
//     z-index: 5000;
//   background-color:white;
//   padding-right:15px;
//   padding-left:15px;
//   border-radius:6px;

  
// } 
})

export class MyProfileModalComponent{
    editCreated=false;
    
    close(){
        this.editCreated=!false;
      } 
}

