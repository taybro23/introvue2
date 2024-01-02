var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'Cool Socks',
    image: './assets/g-socks.jpeg',
    link: 'https://www.amazon.com',
    inventory: 110,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColour: 'green',
        variantImage: './assets/g-socks.jpeg'
      },
      {
        variantId: 2235,
        variantColour: 'blue',
        variantImage: './assets/b-socks.jpeg'
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1
      }
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})