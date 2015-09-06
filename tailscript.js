var http = Npm.require('http');

var originalWrite = http.OutgoingMessage.prototype.write;
http.OutgoingMessage.prototype.write = function(chunk, encoding) {
	var scriptRegEx = /<script type="text\/javascript".*<\/script>\n/g;
	if (typeof chunk === 'string') {
		var injectedChunk = chunk.replace(scriptRegEx, '');
		var scripts = chunk.match(scriptRegEx).join('')+"</body>";
		chunk = injectedChunk.replace(/<\/body>/, scripts)
	}
	originalWrite.call(this, chunk, encoding);
};