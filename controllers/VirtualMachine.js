
class VirtualMachine {

    //simulate data from api payload
    static Vms = [{CPU: 1, RAM: 16, HDD: 10}, {CPU: 1, RAM: 16, HDD: 10}, {CPU: 2, RAM: 32, HDD: 100}]

    static get_virtual_machines() {
        return this.Vms;
    }
}

module.exports = VirtualMachine;
