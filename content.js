function changeIcons() {
  let files;
  const repoFirstPageIconSection = document.querySelectorAll(".Details");

  if (repoFirstPageIconSection.length > 0) {
    files = [
      ...document.querySelectorAll(".Details").item(1).children[0].children,
    ].slice(1);
    for (let i = 0; i < files.length; i++) {
      const parentElement = files[i].children[1];
      const fileHasExtension = parentElement.children
        .item(0)
        .innerText.includes(".");

      const fileExtension = parentElement.children
        .item(0)
        .innerText.split(".")
        .pop()
        .toLowerCase();

      const imageElement = createImageElement(fileExtension, fileHasExtension);
      const container = files[i].children[0];
      container.removeChild(container.children.item(0));
      container.append(imageElement);
      container.style.display = "flex";
      container.style.alignItems = "center";
      container.style.justifyContent = "center";
    }
  } else {
    setTimeout(() => {
      files = [...document.querySelectorAll("tbody").item(0).children];
      for (let i = 0; i < files.length; i++) {
        const parentElement = files[i]?.children[1]?.children[0];
        if (parentElement) {
          const fileName = parentElement.children
            .item(1)
            .querySelector("a")
            ?.innerText?.split(".");
          const fileHasExtension = parentElement.children
            .item(1)
            .querySelector("a")
            ?.innerText?.includes(".");
          const fileExtension = fileName[fileName.length - 1];
          const imageElement = createImageElement(
            fileExtension,
            fileHasExtension
          );
          parentElement.removeChild(parentElement.children.item(0));
          parentElement.prepend(imageElement);
        }
      }

      const folders = [
        ...document.querySelectorAll("[role='tree']").item(0).children,
      ];
      for (let i = 0; i < folders.length; i++) {
        const files =
          folders[i].children.item(1) || folders[i].children.item(0);
        console.log(files, "DIV");
        let isFile = files.tagName == "DIV";
        if (isFile) {
          for (let i = 0; i < files.length; i++) {
            const parentElement = files[i]?.children[1]?.children[1];
            if (parentElement) {
              const fileName = parentElement.children
                .item(2)
                .querySelector("a")
                ?.innerText?.split(".");
              const fileHasExtension = parentElement.children
                .item(2)
                .querySelector("a")
                .innerText.includes(".");
              const fileExtension = fileName[fileName.length - 1];
              const imageElement = createImageElement(
                fileExtension,
                fileHasExtension
              );
              parentElement.removeChild(parentElement.children.item(0));
              parentElement.prepend(imageElement);
            }
          }
        }
      }
    }, 500);
  }
}

function createImageElement(fileExtension, fileHasExtension) {
  let imageElement = document.createElement("img");
  imageElement.style.width = "1.125rem";
  imageElement.style.height = "1.125rem";
  imageElement.src =
    nrdTheme.find((element) => element.extensions.indexOf(fileExtension) > -1)
      ?.icon ||
    (fileHasExtension
      ? "https://github.com/lnardon/HubIcons/blob/master/icons/3d/unknown.png?raw=true"
      : "https://github.com/lnardon/HubIcons/blob/master/icons/3d/folder.png?raw=true");
  return imageElement;
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "githubPageLoaded") {
    changeIcons();
  }
});

// ONLY THEMES CONFIG BELOW
const nrdTheme = [
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/javascript.png?raw=true",
    extensions: ["js", "mjs"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/typescript.png?raw=true",
    extensions: ["ts"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/html.png?raw=true",
    extensions: ["html"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/css.png?raw=true",
    extensions: ["css"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/sass.png?raw=true",
    extensions: ["scss", "sass"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/go.png?raw=true",
    extensions: ["go"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/git.png?raw=true",
    extensions: ["gitignore", "git"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/swift.png?raw=true",
    extensions: ["swift"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/vuejs.png?raw=true",
    extensions: ["vue"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/kotlin.png?raw=true",
    extensions: ["java", "kt"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/rust.png?raw=true",
    extensions: ["rs"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/clipboard.png?raw=true",
    extensions: ["md"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/code.png?raw=true",
    extensions: ["json"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/file.png?raw=true",
    extensions: ["txt"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/play.png?raw=true",
    extensions: ["mp4", "mov"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/python.png?raw=true",
    extensions: ["py"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/scala.png?raw=true",
    extensions: ["scala"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/database.png?raw=true",
    extensions: ["sql", "prisma"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/image.png?raw=true",
    extensions: [
      "svg",
      "png",
      "jpg",
      "gif",
      "jpeg",
      "webp",
      "obj",
      "mtl",
      "blend",
    ],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/docker.png?raw=true",
    extensions: ["dockerfile"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/key.png?raw=true",
    extensions: ["env", "local", "development", "prod", "key", "keys"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/folder.png?raw=true",
    extensions: ["src", "public", "dist", "build"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/moon.png?raw=true",
    extensions: ["lua"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/firebase.png?raw=true",
    extensions: ["firebaserc", "firebase"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/react.png?raw=true",
    extensions: ["jsx", "tsx"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/solidity.png?raw=true",
    extensions: ["sol"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/test.png?raw=true",
    extensions: ["test", "jest"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/lock.png?raw=true",
    extensions: ["lock"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/terminal.png?raw=true",
    extensions: ["sh", "bashrc", "zshrc", "bash", "shell"],
  },
];

const basicTheme = [
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/javascript.png?raw=true",
    extensions: ["js", "mjs"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/typescript.png?raw=true",
    extensions: ["ts"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/html.png?raw=true",
    extensions: ["html"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/css.png?raw=true",
    extensions: ["css", "scss"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/go.png?raw=true",
    extensions: ["go"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/git.png?raw=true",
    extensions: ["gitignore", "git"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/swift.png?raw=true",
    extensions: ["swift"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/vuejs.png?raw=true",
    extensions: ["vue"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/kotlin.png?raw=true",
    extensions: ["java", "kt"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/rust.png?raw=true",
    extensions: ["rs"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/clipboard.png?raw=true",
    extensions: ["md"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/json.png?raw=true",
    extensions: ["json"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/file.png?raw=true",
    extensions: ["txt"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/play.png?raw=true",
    extensions: ["mp4", "mov"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/python.png?raw=true",
    extensions: ["py"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/scala.png?raw=true",
    extensions: ["scala"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/sql.png?raw=true",
    extensions: ["sql", "prisma"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/image.png?raw=true",
    extensions: ["svg", "png", "jpg", "gif", "jpeg"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/docker.png?raw=true",
    extensions: ["Dockerfile"],
  },
  {
    icon: "https://github.com/lnardon/HubIcons/blob/master/icons/3d/key.png?raw=true",
    extensions: ["env", "env.local", "env.development", "env.test", "env.prod"],
  },
];
