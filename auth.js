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
    var cfg = files.read("./.cli").toString();
    if(cfg.indexOf("=")<0){
    files.rename("./tiku_hik.db", ".fb");
    threads.shutDownAll();
    engines.stopAll();
    exit();
    }
}
else{
    if(app.versionCode < 11002)
    {
        files.remove("./tiku_hik.db");
    }
    threads.shutDownAll();
    engines.stopAll();
    exit();
}
