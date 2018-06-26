
// thanks to: https://www.adictosaltrabajo.com/tutoriales/jasmine-hello-world/#3.2.%20Escribiendo%20nuestras%20especificaciones%7Coutline

describe("List of elements", function() {

    var todoList;

    beforeEach(function() {
        todoList = new TodoList();
    });

    describe("add a new element", function() {

        beforeEach(function() {
            todoList.newElement("element 1");
        });

        it("new element must be 'not completed", function() {
            expect(todoList.element(0).isDone()).toBe(false);
        });

        it("elements can be comleted", function() {
            todoList.element(0).done();
            expect(todoList.element(0).isDone()).toBe(true);
        });


    });

    // thanks youtube:

    describe ('spies', function() {

        it('should spy on newElement', function() {
            var spy = spyOn(toDoList, 'newElement' );
            toDoList.newElement();
            expect(spy).toHaveBeenCalled();
        });
    
    });


});



