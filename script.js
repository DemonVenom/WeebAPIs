
const quotePTag = document.querySelector('#quote')
const animePTag = document.querySelector('#anime')
const catboyPTag = document.querySelector('#catboy')


let outputField = document.querySelector("#outputField");

const URL = 'https://animechan.vercel.app/api/random'

const URL2 = 'https://api.catboys.com/catboy'


function getAnimeQuote() {

    return fetch(URL, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            const quote = data.quote
            quotePTag.innerText = quote

            const anime = data.anime
            animePTag.innerText = anime
        })
}



function getAnimeCatboy() {

    const fetchPromise = fetch(URL2);

    fetchPromise.then(response => {
        return response.json();
    }).then(response => {

        catboyPTag.innerText = `${response.response}`;
    });

}
