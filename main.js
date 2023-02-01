var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'vmSocks-green-onWhite.jpeg',
        inventory: 100,
        details: ["80% cotton", "20% polyester", "Gender-Neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ]
    }
})
