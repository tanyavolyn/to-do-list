import { Component } from "react";
import bild from './yes-01.png';
import bildtwo from './no-01.png';
export class ToDoList extends Component {

    state={
        userInput: '',
        todoList: []
    }

    onChangeEvent(e){
        this.setState({userInput:e});
    }
    
    addItem(input){
        if(input===''){
            alert("Please enter an item")
        }
        else{
            let listArray=this.state.todoList;
            listArray.push(input);
            this.setState({todoList: listArray, userInput:''})
        }
    }
    deleteItem(){
        let listArray=this.state.todoList;
        listArray=[];
        this.setState({todoList: listArray})
  
    }
    crossedWord(event){

        const li = event.target;
        li.classList.toggle('crossed');
      let check = document.querySelector('.check');
      check.style.display="none";
      let checktwo=document.querySelector('.checktwo');
      checktwo.style.display="block";
            }
onFormSubmit(e){
    e.preventDefault();
}

     
    render(){
        return(
            <div>
<form onSubmit={this.onFormSubmit}>
            <div>
                <h1>TO DO LIST</h1>
                </div>

                <div>
                <input type="text" 
                placeholder="Your task"
                onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <ul>
    {this.state.todoList.map((item, index)=>(
    <li onClick={this.crossedWord} key={index}><img className="check" src={bild} alt="bild" width="34px"/><img className="checktwo" src={bildtwo} alt="bild" width="34px"/>{item}</li>
    ))}

</ul>




                <div>
                <button className="btn add" onClick={()=>this.addItem(this.state.userInput)}>Add</button>
                </div>
                <div>
                <button className="btn delete" onClick={() => this.deleteItem()}>Delete</button>
                </div>
   
 
              




</form>
                    </div>
        )
    }
}