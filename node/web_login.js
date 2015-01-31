var fs = require('fs');
var login = {};

login(functon(obj){
    this.obj = obj;
    var input = '{\n' +
                  '\\t"Name" : "' + this.obj.name + '",\\n'
                + '\\t"Password" : "' + this.obj.passwd + '",\\n'
              + '}\n';
    fs.writeFile('../json/log.json', input, function(err){
        if(err) console.log(err);
        console.log("save!!");
    });
});
