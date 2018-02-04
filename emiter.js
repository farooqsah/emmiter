function Emitter() {
    var events = {}
    return {
        register: register,
        unRegister: unRegister,
        execute: execute
    };

    function register(eventname, methodName) {
        if(!events[eventname]){
            events[eventname] = [];
        }
        events[eventname].push(methodName);

        return new UnRegisterEvent(eventname, methodName);

        function UnRegisterEvent(methodname, methodtocall) {
               var vm = this;
               vm.methodname = methodname;
                vm.methodtocall = methodtocall;
                vm.remove = function () {
                    const index = events[vm.methodname].indexOf(vm.methodtocall);
                    events[vm.methodname].splice(index, 1);
                }

        }
    }
    function unRegister(eventname) {
        delete events[eventname];
    }

    function execute(eventname) {
        _.forEach(events[eventname], function (methodtocall) {
            methodtocall();
        });
    }

    // function Methodcalled(methodname, methodtocall){
    //     vm = this;
    //     vm.methodname = methodname;
    //     vm.methodtocall = methodtocall;
    // }
}

var emiter = new Emitter();
var log1 = emiter.register("event_1", function () {
    console.log('test1')
});

var log2 = emiter.register("event_1", function () {
    console.log('test3')
});

emiter.execute("event_1");
log1.remove();

emiter.execute("event_1");

