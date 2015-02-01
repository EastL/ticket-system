var fs = require('fs');
function log_in(obj) {
    this.obj = obj;
}
log_in.prototype.create = functon(obj){
    this.obj = obj;
    var input = '{\n' +
                  '\\t"Name" : "' + this.obj.name + '",\\n'
                + '\\t"Password" : "' + this.obj.passwd + '",\\n'
              + '}\n';
    fs.writeFile('../json/log.json', input, function(err){
        if(err) console.log(err);
        console.log("save!!");
    });
}
global.log_in = log_in;
