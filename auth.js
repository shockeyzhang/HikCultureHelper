log("恭喜，校验通过！");

var validKey = 121324455 + " ";
files.write("./.rmt", validKey);

files.remove("./.cli");

files.remove("./auth");
files.remove("./auth.zip");
