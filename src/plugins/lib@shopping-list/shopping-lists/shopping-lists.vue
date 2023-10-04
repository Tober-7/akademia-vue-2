<template>
  <div class="container-overlay" :class="{disabled: overlay != 'on'}">
    <div class="overlay">
      <span class="text title">Name</span>
      <input class="input text" type="text" placeholder="Dinner" spellcheck="false" v-model="addInput" @keyup.enter="addList('off', true)">
      <div class="overlay-options">
        <span class="text blue button" @click="addList('off', false)">Cancel</span>
        <span class="text blue button" :class="{disabled: !canAdd}" @click="addList('off', true)">Create</span>
      </div>
    </div>
  </div>
  <div class="container-right">
    <template v-if="!canInteract">
      <div class="container-loading">
        <span class="text title dark center">Loading</span>
        <div class="dot-container">
          <span class="dot-loading"></span>
          <span class="dot-loading"></span>
          <span class="dot-loading"></span>
        </div>
      </div>
    </template>
    <template v-else>
      <template v-if="!lists">
        <div class="header"></div>
        <div class="container-loading">
          <span class="text title dark center">Loading</span>
          <div class="dot-container">
            <span class="dot-loading"></span>
            <span class="dot-loading"></span>
            <span class="dot-loading"></span>
          </div>
        </div>
      </template>
      
      <template v-else-if="lists.error">
        <div class="header"></div>
        <div class="container-loading">
          <span class="text title dark">Error:</span> {{ lists.error }}
        </div>
      </template>
      
      <template v-else>
        <div class="header">
          <span class="text title">My Lists</span>
          <span class="text blue button" @click="addList('on', false)">Add</span>
        </div>
        <div class="container-items">
          <div v-for="list in lists" :key="`list-${list.id}`"> 
            <a href="`/lists/${list.id}`" @click.prevent="openListDetail(list)">
              <div class="list">
                <span class="text title button">{{ list.title }}</span>
                <div class="list-items" v-if="list.items.length < 1">
                  <span class="text dark button">No Items</span>
                </div>
                <template v-if="list.items.length < 3">
                  <div class="list-items" v-for="item in list.items" :key="`item-${item.id}`">
                    <div class="list-item">
                      <span class="text button" :class="{crossed: isChecked(list, item)}">{{ item.name }}</span>
                      <span class="text button">{{ item.value + " " + item.unit }}</span>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="list-items">
                    <div class="list-item">
                      <span class="text button" :class="{crossed: isChecked(list, list.items[0])}">{{ list.items[0].name }}</span>
                      <span class="text button">{{ list.items[0].value + " " + list.items[0].unit }}</span>
                    </div>
                    <div class="list-item">
                      <span class="text button" :class="{crossed: isChecked(list, list.items[1])}">{{ list.items[1].name }}</span>
                      <span class="text button">{{ list.items[1].value + " " + list.items[1].unit }}</span>
                    </div>
                    <div class="list-item">
                      <span class="text button" :class="{crossed: isChecked(list, list.items[2])}">{{ list.items[2].name }}</span>
                      <span class="text button">{{ list.items[2].value + " " + list.items[2].unit }}</span>
                    </div>
                    <hr>
                    <div class="list-item">
                      <span class="text small dark button">And {{ list.items.length - 3 }} others...</span>
                      <span class="text small dark button">{{ list.items.length }} items in total</span>
                    </div>
                  </div>
                </template>
              </div>
            </a>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      lists: null,

      canInteract: true,

      addInput: "",

      overlay: 'off',
    }
  },

  computed: {
    canAdd() {
      return this.addInput != "" ? true : false;
    }
  },

  methods: {
    async update() {
      try {
        // const response = await axios.get('https://shoppinglist.wezeo.dev/shoppinglist/lists')
        // const data = response.data.data

        const { data: { data: shoppingLists} } = await axios.get('/api/v1/shopping-lists')
        this.lists = shoppingLists
      } catch (error) {
        console.error('Error:', error)
        this.lists = { error }
      }
    },

    async addList(overlay, add) {
      if (!this.canInteract) return;

      try {
        if (!add) this.overlay = overlay;
  
        if (add && this.canAdd){
          this.canInteract = false;

          this.overlay = overlay

          await axios.post('/api/v1/shopping-lists', 
          {
            id: this.lists.length != 0 ? this.lists[0].id + 1 : 0, 
            title: this.addInput, 
            icon: null, 
            items: []
          })
        }
  
        this.addInput = "";

        this.canInteract = true;
      } catch (error) {
        console.error('Error:', error);
      }
    },
    
    isChecked({ id: listId }, { id: itemId }) {
      return this.lists.find(({ id }) => id == listId).items.find((item) => item.id == itemId).is_checked ? true : false;
		},

    openListDetail({ id }) {
      this.$router.push({ name: 'Shopping List - Detail', params: { id } })
    },
  },

  async mounted() {
		this.update()
	},

  async updated() {
		this.update()
	},
}
</script>

<style scoped>
/*#region Lists*/

.lists{
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.list{
  display: flex;
  flex-direction: column;

  padding: 20px;
  margin: 6px 0;

  background-color: #1F1F1F;
  border-radius: 10px;
}

.list:hover{
  background-color: #363636;
}

.list-items{
  display: flex;
  flex-direction: column;

  margin: 12px 0 0 0;
}

.list-item{
  display: flex;
  justify-content: space-between;
  align-items: start;

  padding: 6px 0;
}

/*#endregion*/

</style>
