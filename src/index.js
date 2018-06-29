import './index.scss';
import { TodoList, Element } from './TodoList';

//let todoList = [];
//crear objeto lista
let todoList = new TodoList();

$(document).ready(function(){

    //Create <li> when adding item in the form 
    var appendListItem = () => {
        $('.add').click((e) => {
            e.preventDefault;

            let listItem = $('#to-do').val();
            
            if(listItem != '') {
                $('#to-do-list').append(
                    `<li class="to-do-list__item">
                        ${listItem}
                        <span class="deleteItem">×</span>
                    </li>`
                );
            }
            $('#to-do').focus().val('');

            $('.to-do-list__item').unbind('click');
            // Add class done al <li> when clicking on
            $('.to-do-list__item').click(function(){
                $(this).toggleClass("done");  
            });
            
            $('.deleteItem').unbind('click');
            // Delete <li> when clicking in deleteItem
            $('.deleteItem').click(function(e){
                e.stopPropagation();
                $(this).parent().remove();
            });
        });
        
    };
    
    appendListItem();

    

});

// var spy = spyOn(toDoList, 'newElement' )
