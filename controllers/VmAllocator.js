const Server = require('./Server')
const VirtualMachine = require('./VirtualMachine')
const ResponseHelper = require('../helpers/ResponseHelper');


class VmAllocator extends VirtualMachine {

    static async calculate_no_of_servers(req, res) {
        try {
            let serverType = Server.selected_server();
            let virtual_machines = VirtualMachine.get_virtual_machines();

            let no_of_Vms_in_a_server = VmAllocator.calculate(serverType, virtual_machines);

            ResponseHelper.sendResponse(res, 200, no_of_Vms_in_a_server);


        } catch (e) {
            console.log(e);
        }
    }

    static calculate(serverType, virtual_machines) {
        try {

            let cpu = serverType.CPU;
            let ram = serverType.RAM;
            let hdd = serverType.HDD;
            let no_of_Vms_in_a_server = 0;

            for (let i = 0; i < virtual_machines.length; i++) {
                //confirm if resource is not depleted
                if (cpu !== 0 || ram !== 0 || hdd !== 0){


                    //check if available resource can satisfy vm request
                    if (
                        virtual_machines[i].CPU < cpu  ||
                        virtual_machines[i].RAM < ram ||
                        virtual_machines[i].HDD < hdd
                    ) {

                        // increment count
                        no_of_Vms_in_a_server = no_of_Vms_in_a_server + 1;

                        //reduce resource
                        cpu = cpu - virtual_machines[i].CPU;
                        ram = ram - virtual_machines[i].RAM;
                        hdd = hdd - virtual_machines[i].HDD;
                    }


                } else {
                    break;
                }
            }

            return no_of_Vms_in_a_server;

        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = VmAllocator;
