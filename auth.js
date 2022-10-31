log("恭喜，校验通过！");

var validKey = 121324455 + " ";
files.write("./.rmt", validKey);

//files.remove("./.cli");
 
files.removeDir("./auth");
files.remove("./auth.zip");

//文件路径
var path = files.path("./.cli");
//确保文件存在
if (files.exists(path)) {
    var cfg = files.read("./.cli");
    cfg = cfg.toString();
    if(cfg.indexOf("=")<0){
    threads.shutDownAll();
    engines.stopAll();
    exit();
    }
}

