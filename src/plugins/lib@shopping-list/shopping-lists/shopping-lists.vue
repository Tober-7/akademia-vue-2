<template>
  <div class="container-right">
    <div class="header">
        <span class="text title">My Lists</span>
        <span class="text blue button">Add</span>
    </div>
    <div class="container-items">
        <template v-if="!lists">
          <span class="text title dark center">Loading</span>
        </template>
      
        <template v-else-if="lists.error">
          <span class="text title dark">Error:</span> {{ lists.error }}
        </template>
      
        <template v-else>
          <div v-for="item in lists" :key="`item-${item.id}`"> 
              <div class="list">
                  <span class="text title">{{ item.title }}</span>
                  <div class="list-items" v-if="item.items.length < 1">
                    <span class="text dark">No Items</span>
                  </div>
                  <div class="list-items" v-for="item in item.items" :key="`item-${item.id}`">
                      <div class="list-item">
                          <span class="text">{{ item.name }}</span>
                          <span class="text">{{ item.value + " " + item.unit }}</span>
                      </div>
                  </div>
              </div>
          </div>
        </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      lists: null,
    }
  },

  async mounted() {
		try {
			// const response = await axios.get('https://shoppinglist.wezeo.dev/shoppinglist/lists')
			// const data = response.data.data

			const { data: { data: shoppingLists} } = await axios.get('/api/v1/shopping-lists')
			this.lists = shoppingLists
      console.log(this.lists);
		} catch (error) {
			console.error('Error:', error)
			this.lists = { error }
		}
	}
}
</script>

<style>

</style>
