    const extensionToFileMap = {
	js : "javascript",
	ts: "typescript"
    };

    // TODO: Delete this and use only local images
    const imageMapCloud = {        
	js : "https://github.com/lnardon/HubIcons/blob/master/icons/3d/javascript.png?raw=true",
        ts : "https://github.com/lnardon/HubIcons/blob/master/icons/3d/typescript.png?raw=true",
        html: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/html.png?raw=true",   
        css : "https://github.com/lnardon/HubIcons/blob/master/icons/3d/css.png?raw=true",
        go:   "https://github.com/lnardon/HubIcons/blob/master/icons/3d/go.png?raw=true",
        gitignore: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/git.png?raw=true",       
        swift: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/swift.png?raw=true", 
        vue:   "https://github.com/lnardon/HubIcons/blob/master/icons/3d/vuejs.png?raw=true",
        java:  "https://github.com/lnardon/HubIcons/blob/master/icons/3d/kotlin.png?raw=true",
        rs: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/rust.png?raw=true"
    }

    const basicMap = {
        js : "https://github.com/lnardon/HubIcons/blob/master/icons/basic/js.svg?raw=true",
        ts : "https://github.com/lnardon/HubIcons/blob/master/icons/basic/ts.svg?raw=true",
        html: "https://github.com/lnardon/HubIcons/blob/master/icons/basic/html.svg?raw=true",   
        css : "https://github.com/lnardon/HubIcons/blob/master/icons/basic/css.svg?raw=true",
        go:   "https://github.com/lnardon/HubIcons/blob/master/icons/basic/go.svg?raw=true",
        gitignore: "https://github.com/lnardon/HubIcons/blob/master/icons/basic/git.svg?raw=true",       
        swift: "https://github.com/lnardon/HubIcons/blob/master/icons/basic/swift.svg?raw=true", 
        vue:   "https://github.com/lnardon/HubIcons/blob/master/icons/basic/vue.svg?raw=true",
        java:  "https://github.com/lnardon/HubIcons/blob/master/icons/basic/java.svg?raw=true",
        rs: "https://github.com/lnardon/HubIcons/blob/master/icons/basic/rust.svg?raw=true",
	c: "https://github.com/lnardon/HubIcons/blob/master/icons/basic/c.svg?raw=true",
	sh: "https://github.com/lnardon/HubIcons/blob/master/icons/basic/console.svg?raw=true",
	json: "https://github.com/lnardon/HubIcons/blob/master/icons/basic/json.svg?raw=true",
	pdf: "https://github.com/lnardon/HubIcons/blob/master/icons/basic/pdf.svg?raw=true",
	py: "https://github.com/lnardon/HubIcons/blob/master/icons/basic/python.svg?raw=true",
	md: "https://github.com/lnardon/HubIcons/blob/master/icons/basic/readme.svg?raw=true",
	jsx: "https://github.com/lnardon/HubIcons/blob/master/icons/basic/react.svg?raw=true",
	wa: "https://github.com/lnardon/HubIcons/blob/master/icons/basic/webassembly.svg?raw=true",
	tf: "https://github.com/lnardon/HubIcons/blob/master/icons/basic/terraform.svg?raw=true" 
    }
    const files = [...[...document.querySelectorAll(".Details")][1].children[0].children].slice(1);

    for(let i = 0; i < files.length;i++){
	let parentElement = files[i].children[1];
        let fileExtension = [...parentElement.children][0].innerText.split(".").pop();
	let imageElement = document.createElement("img");
	imageElement.style.width = "1rem";
	imageElement.style.height = "1rem";
	// imageElement.src = chrome.runtime.getURL(`/icons/${extensionToFileMap[fileExtension]}.png`);
	imageElement.src = basicMap[fileExtension] || "https://github.com/lnardon/HubIcons/blob/master/icons/typescript.png?raw=true";
	files[i].children[0].removeChild(files[i].children[0].children.item(0));
	files[i].children[0].append(imageElement);

	files[i].children[0].style.display = "flex";
	files[i].children[0].style.alignItems = "center";
	files[i].children[0].style.justifyContent = "center";
    }
