import fs from "fs";
import newFunc, { exportFunc2 } from "./ImportVsRequire.js";

newFunc();
fs.writeFileSync("new.txt", exportFunc2());
