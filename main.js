var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    description: 'Cool Socks',
    selectedVariant: 0,
    link: 'https://www.amazon.com',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColour: 'green',
        variantImage: './assets/g-socks.jpeg',
        variantQuantity: 50
      },
      {
        variantId: 2235,
        variantColour: 'blue',
        variantImage: './assets/b-socks.jpeg',
        variantQuantity: 0
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
    updateProduct(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    onSale() {
      return this.brand + ' ' + this.product + ' are on sale!'
    }
  }
})