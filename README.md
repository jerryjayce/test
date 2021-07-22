<select/>**Starting the docker container** <p>
    1) Make sure you have the latest version of docker installed on your machine <p>
    2) Run `docker build -t jerryjayce/vm_allocator:v1 .` <p>
    3) Run `docker run -p 9900:9900 jerryjayce/vm_allocator:v1` <p>
    
    
 
 
<select/>**Calling the virtual machine distribution endpoint**  <p>
    The endpoint can be called with postman or curl<p>
    
   1.) Postman (Get request):

    http://127.0.0.1:9900/calculate_vm
   
   2.) Curl:
  
    curl --location --request GET 'http://127.0.0.1:9900/calculate_vm
    
 
   <select/>**Modifying server and vm config** <p>
   Modifying the server and Vms configuration can be done in the Server
   and VirtualMachine Class. This structure was implemented based on the UML definition in the task description.
    