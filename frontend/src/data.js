export const sliderItems = [
    {
        id:1,
        src: './assets/hero/girl-model2.jpg',
        title: `BUY 1
GET 1`,
        alt: 'Sweater Image',
        textColor:'text-orange-900'
    },
    {
        id:2,
        src: './assets/hero/man-model3.jpg',
        title: '99% CASHBACK',
        alt: 'Shoes Image',
        textColor:'text-gray-200'
    },
    {
        id:3,
        src: './assets/hero/girl-model4.jpg',
        title: `12.12
EVENT`,
        alt: 'Shirt Image',
        textColor:'text-yellow-900 ',
    },
    {
        id:4,
        src: './assets/hero/girl-model3.jpg',
        title: `FREE
SHIPPING`,
        alt: 'Hoodie Image',
        textColor:'text-gray-200'
    },
    {
        id:5,
        src: './assets/hero/man-model2.jpg',
        title: `BUNCH 
OF VOUCHER`,
        alt: 'Jeans Image',
        textColor:'text-orange-600'
    },
]

export const categoriesItems = [
    {
        id:1,
        title: 'Shirt',
        desc: 'Lorem ipsum dolor sit amet.',
        src:'./assets/categories/shirt3.jpg',
    },
    {
        id:2,
        title: 'Sweater',
        desc: 'Lorem ipsum dolor sit amet.',
        src:'./assets/categories/sweater1.jpg',
    },
    {
        id:3,
        title: 'Hoodie',
        desc: 'Lorem ipsum dolor sit amet.',
        src:'./assets/categories/hoodie.jpg',
    }
]

const homePageProducts = [];
const productPageProducts = [];
const categories = ['sweatshirt-female','hoodies','hoodies-female','longsleeve','shirt','sweatshirt']
categories.forEach(category=>{
    for(let i = 1; i<=5; i++){
    homePageProducts.push(
        {
            id:`${category}-${i}`,
            category,
            src:`assets/products/${category}/${i}.jpg`
        }
    )
}
})
categories.forEach(category=>{
    for(let i = 1; i<=20; i++){
    productPageProducts.push(
        {
            id:`${category}-${i}`,
            category,
            src:`assets/products/${category}/${i}.jpg`
        }
    )
}
})

export {homePageProducts, categories, productPageProducts};