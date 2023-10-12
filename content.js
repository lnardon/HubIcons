    const extensionToFileMap = {
	js : "javascript",
	ts: "typescript"
    };

    // TODO: Delete this and use only local images
    const imageMapCloud = {
        js : "https://github.com/lnardon/HubIcons/blob/master/icons/javascript.png?raw=true",
	ts : "https://github.com/lnardon/HubIcons/blob/master/icons/typescript.png?raw=true",
	html: "https://github.com/lnardon/HubIcons/blob/master/icons/html.png?raw=true",
	css : "https://github.com/lnardon/HubIcons/blob/master/icons/css.png?raw=true"
    }
    const files = [...[...document.querySelectorAll(".Details")][1].children[0].children].slice(1);

    for(let i = 0; i < files.length;i++){
	let parentElement = files[i].children[1];
        let fileExtension = [...parentElement.children][0].innerText.split(".").pop();
	let imageElement = document.createElement("img");
	imageElement.style.width = "1rem";
	imageElement.style.height = "1rem";
	// imageElement.src = chrome.runtime.getURL(`/icons/${extensionToFileMap[fileExtension]}.png`);
	imageElement.src = imageMapCloud[fileExtension] || "https://github.com/lnardon/HubIcons/blob/master/icons/typescript.png?raw=true";
	files[i].children[0].removeChild(files[i].children[0].children.item(0));
	files[i].children[0].append(imageElement);

	files[i].children[0].style.display = "flex";
	files[i].children[0].style.alignItems = "center";
	files[i].children[0].style.justifyContent = "center";
    }
