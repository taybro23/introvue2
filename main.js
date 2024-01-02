Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
})

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="image" alt="socks image">
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <a :href="link" target="_blank">
          View products like this
        </a>
        <p v-if="inStock > 10">In Stock</p>
        <p v-else-if="inStock <=10 && inStock > 0">Almost Sold Out</p>
        <p v-else>Out Of Stock</p>
        <p v-show="onSale">{{ onSale }}</p>
        <p>User is premium: {{ premium }}</p>
        <p>Shipping: {{ shipping }}</p>

        <product-details :details="details"></product-details>

        <div v-for="(variant, index) in variants"
            :key="variant.variantId"
            class="color-box"
            :style="{ backgroundColor: variant.variantColour }"
            @mouseover="updateProduct(index)">
        </div>

        <ul>
          <li v-for="size in sizes">{{ size }}</li>
        </ul>

        <button @click="addToCart" :class="{'disabled': inStock === 0}" :disabled="inStock === 0">Add To Cart</button>
        <button @click="removeFromCart" :class="{'disabled': cart === 0}" :disabled="cart === 0">Remove From Cart</button>

      </div>
    </div>
  `,
  data() {
    return {
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
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
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
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return 2.99
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    removeItem(id) {
      for(var i = this.cart.length -1; i>=0; i--)
      {
        if (this.cart[i] === id) {
          this.cart.splice(i, 1);
        }
      }
    }
  }
})