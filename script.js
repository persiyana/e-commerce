
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b2cf30ec30msh8bfb7e980100998p1da74fjsnc1233039b101',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    }
};

fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options)
    .then(response => response.json())
    .then(response => {
        document.getElementById('categoryName').innerHTML += response.categoryName;
        const indexes = [];
        while (indexes.length < 20) {
            const index = Math.floor(Math.random() * response.products.length);
            if (!indexes.includes(index)) {
                indexes.push(index);
         }
        }
        for (const index of indexes) {
            const li = document.createElement('li');
            li.classList.add('product'+index);
            const prod =response.products[index];
            
            li.innerHTML += `<img src="http://${prod.imageUrl}" /><br/>`;
            li.innerHTML += `<p>${prod.name}</p><br/>`;
            li.innerHTML += `<h4>${prod.price.current.text}</h4><br/><button type="button">Buy</button>`;
            document.getElementById('list-of-products').appendChild(li);
        }
    })
    .catch(err => console.error(err));