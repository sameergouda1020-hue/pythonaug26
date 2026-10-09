  let container = document.querySelector("#container");

        async function getData() {

            let res = await fetch("https://jsonplaceholder.typicode.com/posts");

            let data = await res.json();

            data.forEach((post) => {

                let div = document.createElement("div");

                let h2 = document.createElement("h2");
                h2.innerText = post.title;

                let p = document.createElement("p");
                p.innerText = post.body;

                div.append(h2, p);

                container.append(div);

            });

        }

        getData();