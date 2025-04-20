const fs = require('fs');

const CONFIG = {
	input: "format-powiainanum.js",
	output: "format-powiainanum.esm.js",
	prefix: `// format-powiainanum.js by VeryrrDefine
// Code snippets from [format-expantanum.js by cloudytheconqueror]
;
import PowiainaNum from "powiaina_num.js";

; export default (function () {
 `,
	suffix: `    
    return format;
})();`
}

fs.readFile(CONFIG.input, 'utf8', (err, data) => {
	if (err)
		console.error(`Failed to read file: ${err}`);
	else {
		const filecontent = data;
		let left = filecontent.indexOf("/// FUNCTIONSTART");
		let right = filecontent.indexOf("/// FUNCTIONEND");
		const inner = CONFIG.prefix+"\n"+filecontent.slice(left,right+12)+"\n"+CONFIG.suffix;
		fs.writeFile(CONFIG.output, inner, 'utf8', function (err) {
			if(!err) console.log("generated"); else console.error(err);
		});
		
	}
});
