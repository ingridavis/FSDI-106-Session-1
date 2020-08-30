

function addToDo(){  //Adding the actual text

    var text=$("#txt-task").val();
    var todo={
        text:text,
        user:"Ingrid"
    }
    if(text===""){
        alert("Enter Task");
    }else{
        displayToDo(todo.text);
        $("#txt-task").val("");
    }
    $('#txt-task').focus(); 

}

function displayToDo(todo){  // Adding the list item to the ul
    var li=`<li> ${todo}<button>Done </button> </li>`
    
    $('#pending-list').append(li);

}

function init(){
    console.log('Init the to do app');
    $('#btn-add').click(addToDo);
    $('#txt-task').keypress(function(e){   
        if(e.key==="Enter"){
            addToDo();
        }
    }); 

}

    
window.onload=init;