<template>
  <button class="container-overlay" :disabled="!overlay">
    <div class="overlay">
      <span class="text title">Name</span>
      <input class="input text" type="text" placeholder="Dinner" v-model="addInput" @keyup.enter="addList(false, true)">
      <div class="overlay-options">
        <span class="text blue button" @click="addList(false, false)">Cancel</span>
        <button class="text blue button" :disabled="!canAdd" @click="addList(false, true)">Create</button>
      </div>
    </div>
  </button>
  <div class="container-right">
      <template v-if="!lists">
        <span class="text title dark center">Loading</span>
      </template>
      
      <template v-else-if="lists.error">
        <span class="text title dark">Error:</span> {{ lists.error }}
      </template>
      
      <template v-else>
        <div class="header">
          <span class="text title">My Lists</span>
          <!--
            <span class="text blue button" @click="addList(true, false)">Add</span>
          -->
        </div>
        <div class="container-items">
          <div v-for="item in lists" :key="`item-${item.id}`"> 
            <a href="`/lists/${item.id}`" @click.prevent="openShoppingListDetail(item)">
              <div class="list">
                <span class="text title button">{{ item.title }}</span>
                <div class="list-items" v-if="item.items.length < 1">
                  <span class="text dark button">No Items</span>
                </div>
                <div class="list-items" v-for="item in item.items" :key="`item-${item.id}`">
                  <div class="list-item">
                    <span class="text button">{{ item.name }}</span>
                    <span class="text button">{{ item.value + " " + item.unit }}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </template>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      lists: null,
      addInput: "",
      overlay: false,
    }
  },

  computed: {
    canAdd() {
      return this.addInput != "" ? true : false;
    }
  },

  methods: {
    addList(overlay, add) {
      if (!add) this.overlay = overlay;

      if (add && this.addInput != ""){
        this.lists.unshift({
          id: this.lists[this.lists.length - 1].id - 1, 
          title: this.addInput, 
          icon: null, 
          items: []
        })

        this.overlay = overlay
      }

      this.addInput = "";
    },
    openShoppingListDetail({ id }) {
			this.$router.push({ name: 'Shopping List - Detail', params: { id } })
		}
  },

  async mounted() {
		try {
			// const response = await axios.get('https://shoppinglist.wezeo.dev/shoppinglist/lists')
			// const data = response.data.data

			const { data: { data: shoppingLists} } = await axios.get('/api/v1/shopping-lists')
			this.lists = shoppingLists
		} catch (error) {
			console.error('Error:', error)
			this.lists = { error }
		}
	}
}
</script>

<style>

</style>
