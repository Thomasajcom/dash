import App from './App.svelte';

let app: App;

try {
	app = new App({
		target: document.body
	});
}
catch(e) {
	document.getElementsByTagName("body")[0].appendChild(document.createTextNode(e.toString() + " - " + e.stack));
}


export default app;