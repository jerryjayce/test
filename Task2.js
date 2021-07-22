class LinkedList {
    prev_node = null;
    list = [
        {index: 6, next: {index: 10, next: [Object]}},
        {index: 18, next: {index: 18, next: [Object]}},
        {index: 28, next: {index: 28, next: null}},
        {index: 50, next: null},
    ]


    get_rev_node(index) {
        for (let i = 0; i < this.list.length; i++) {

            //if match is found, return prev index
            if (index === this.list[i].index) {

                if (this.prev_node === null) {
                    this.prev_node = "no previous index";
                    break;
                } else if (this.prev_node !== null) {
                    break;
                }

                //if at the end of linked list with not index found
            } else if (this.list[i].next === null && this.prev_node === null) {

                this.prev_node = "index does not exist";
                break;

            } else {
                //if index found and previous is not null
                this.prev_node = this.list[i].index;

            }

        }

        return this.prev_node;
    }
}

let preceding_value = new LinkedList();

let val = preceding_value.get_rev_node(28);

console.log(val);