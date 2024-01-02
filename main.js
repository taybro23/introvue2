var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'Cool Socks',
    image: './assets/g-socks.jpeg',
    link: 'https://www.amazon.com',
    inventory: 100,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColour: 'green'
      },
      {
        variantId: 2235,
        variantColour: 'blue'
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  }
})