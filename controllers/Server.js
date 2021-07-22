class Server {

    //simulate data from db
    static server_type = {CPU: 2, RAM: 32, HDD: 100}

    static selected_server() {
        return this.server_type;
    }

}

module.exports = Server;
