// const baseURL = "https://princeuche-project.github.io/wdd230/";

// const linksURL = "https://princeuche-project.github.io/wdd230/data/links.json";

// async function getLinks() {
//     const response = await fetch(linksURL);
//     const data = await response.json();
//     console.log(data);
//   }

//   getLinks();

//   async function getLinks() {
//     const response = await fetch(linksURL);
//     const data = await response.json();
//     displayLinks(data);
//   }



const baseURL = " https://princeuche-project.github.io/wdd230/";
const linksURL = "https://princeuche-project.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            //   console.log(data);
            displayLinks(data.lessons);
        } else {
            throw Error(await response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}

function displayLinks(lesson) {
    lesson.forEach((lesson) => {
        let li = document.createElement("li");
        li.innerHTML = `Week ${lesson.lesson}: `;
        let count = 0;
        lesson.links.forEach((link) => {
            if (count > 0) {
                let span = document.createElement("span");
                span.innerHTML = ` | `;
                li.appendChild(span);
            }
            let a = document.createElement("a");
            a.setAttribute("href", link.url);
            a.setAttribute("target", "_blank");
            a.innerHTML = link.title;
            li.appendChild(a);
            count++;
        });
        document.querySelector("#links").appendChild(li);
    });
}

getLinks();