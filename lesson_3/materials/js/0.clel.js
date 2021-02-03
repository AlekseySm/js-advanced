/*
    Call Stack and Event Loop
*/ 

function func1() {
    debugger;

    setTimeout(function(){
        //alert('123123');
        console.log('hello from function1 #')
    }, 0);

    func2();    
}

function func2() {
    console.log('hello from function2 #')
    func3();
}

function func3() {
    console.log('hello from function3 #')  
}

func1();

// http://latentflip.com/loupe/?code=DQpsZXQgdGVzdCA9IGZ1bmN0aW9uKCl7DQogICAgICAgIGFsZXJ0KCcxMjMxMjMnKTsNCiAgICB9DQoNCmZ1bmN0aW9uIGZ1bmMxKCkgew0KICAgIGRlYnVnZ2VyOw0KICAgIA0KICAgIHNldFRpbWVvdXQodGVzdCwgMCk7DQoNCiAgICBmdW5jMigpOyAgICANCn0NCg0KZnVuY3Rpb24gZnVuYzIoKSB7DQogICAgZnVuYzMoKTsNCn0NCg0KZnVuY3Rpb24gZnVuYzMoKSB7DQogICAgY29uc29sZS5sb2coJ2FzZGFzZCcpICANCn0NCg0KZnVuYzEoKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec