
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b2cf30ec30msh8bfb7e980100998p1da74fjsnc1233039b101',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    }
};

async function listOfItems() {
    try {
        const response = await fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options);
        const shopInfo = await response.json();
        const category = await shopInfo.categoryName;
        const products = await shopInfo.products;

        document.getElementById('categoryName').innerHTML += `<h3 id='categoryN'>${category}</h3>`;
        displayItems(products);
    }
    catch (error) {
        console.log(error);
    }
}

const indexes = [];

function getRandomIndexes(numOfProducts) {
    while (indexes.length < 20) {
        const index = Math.floor(Math.random() * numOfProducts);
        if (!indexes.includes(index)) {
            indexes.push(index);
        }
    }
}

function displayItems(products) {
    const numOfProducts = products.length;
    getRandomIndexes(numOfProducts)
    for (const index of indexes) {
        const li = document.createElement('li');
        li.classList.add('product' + index);
        const prod = products[index];

        li.innerHTML += `<img src="http://${prod.imageUrl}" /><br/>`;
        li.innerHTML += `<p>${prod.name}</p><br/>`;
        li.innerHTML += `<h4>${prod.price.current.text}</h4><br/><button type="button">Buy</button>`;
        document.getElementById('list-of-products').appendChild(li);
    }
}

listOfItems();