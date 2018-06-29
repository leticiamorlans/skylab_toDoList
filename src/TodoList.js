
class Element {
    constructor(name){
        this.name = name;
        this.done = false;
    }

    isDone() {
        return this.done
    }

    done() {
        this.done = true
    };
}

class TodoList {
    constructor(){
        this.elements = [];
    }

    newElement(name){
        const e = new Element(name);
        this.elements.unshift(e);
    }

    element(index){
        return this.elements[index];
    }
}

export {
    Element,
    TodoList
}
