class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    display() {
        let runner = self.head
        let string = ''
            while(runner !== null){
                let str[i] = runner.value
                let str[i+1] = runner.next.value
                string = str[i].concat(str[i+1]);
                runner=runner.next
            }
            return string
        }
}

