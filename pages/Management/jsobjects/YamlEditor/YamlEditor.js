export default {
	clear:(name="editIframe")=>{this.setContent("",name)},
	setContent:(data,name="editIframe")=>{
		postWindowMessage(data,name,"*")
	},
	htmlContent:()=>{
		const content="";
	return `<!DOCTYPE html>
<html lang="en">
<head>
<title>ACE in Action</title>
<style type="text/css" media="screen">
    #editor { 
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>
</head>
<body>

<div id="editor">${content}</div>
    
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.16.0/ace.min.js" integrity="sha512-4T3GMbqlA/8FAPZRSo/JbV6RNL4s/XkV86vNHzuHPHPeqKJWbV3Sp5KicgK3NwB+bd4KOm1Q6c7O3RNV2o6RPg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.session.setMode("ace/mode/yaml");
		editor.session.on('change', function(delta) {
			window.parent.postMessage(editor.getValue(), "*");
		});
		window.addEventListener('message', (event) => {
			editor.session.setValue(event.data);
			window.parent.postMessage(event.data, "*");
    });
</script>
</body>
</html>`;
}
}