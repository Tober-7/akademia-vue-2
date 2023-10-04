<template>
  <div class="container-app">
    <div class="container-sidebar">
      <div class="header">
        <span class="text title">Shopping List</span>
      </div>
      <div class="sidebar-options">
        <a href="" @click.prevent="openLists">
          <div class="sidebar-option" :class="{selected: checkRouter(null)}">
            <span class="text button">Lists</span>
          </div>
        </a>
        <hr>
        <div v-for="item in lists" :key="`item-${item.id}`">
          <a href="`/lists/${item.id}`" @click.prevent="openShoppingListDetail(item)">
            <div class="sidebar-option" :class="{selected: checkRouter(item)}">
              <span class="text button"> {{ item.title }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <router-view></router-view>
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

    checkRouter(list) {
      if (list){
        if (this.$route.params.id == undefined) return false;
        else if (this.$route.params.id == list.id) return true;
      }
      else{
        if (this.$route.params.id == undefined) return true;
      }
    },

    openShoppingListDetail({ id }) {
			this.$router.push({ name: 'Shopping List - Detail', params: { id } })
		},

    openLists() {
			this.$router.replace({ name: 'Shopping List - List' })
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

<style>
/*#region Font*/

@font-face {
  font-family: "SF-Pro-Display";
  src: url(@/assets/SF-Pro-Display-Regular.woff) format(woff);
}

*{
  font-family: "SF-Pro-Display", sans-serif;
}

/*#endregion*/

/*#region Other*/

html, body {
  max-width: 100%;
  overflow-x: hidden;

  background-color: #1F1F1F;

  transition: none;
}

header, body{
  margin: 0;
}

::-webkit-scrollbar {
  display: none;
}

*{
  transition: 0.4s;
}

/*#endregion*/

/*#region Containers*/

.container-app{
  display: flex;

  min-height: 100vh;
}

.container-sidebar{
  display: flex;
  flex-direction: column;
  
  min-width: 400px;
}

.container-right{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  background-color: #181818;
}

.container-loading{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.container-items{
  display: flex;
  flex-direction: column;
  
  padding: 6px 12px;
}

/*#endregion*/

/*#region Sidebar*/

.sidebar-options{
  display: flex;
  flex-direction: column;
  
  padding: 12px;
  margin: 24px 0 0 0;
}

.sidebar-option{
  cursor: pointer;
  pointer-events: visible;

  padding: 12px;
  margin: 6px 0;

  background-color: transparent;

  border-radius: 5px;
  border: none;

  &.selected{
    background-color: #212B36;
  }
}

.sidebar-option:hover{
  background-color: #363636;

  &.selected{
    background-color: #212B36;
  }
}

/*#endregion*/

/*#region Header*/

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 56px;
  
  padding: 0 24px;

  border-bottom: solid 3px #181818;
  background-color: #1F1F1F;
}

/*#endregion*/

/*#region Overlay*/

.container-overlay{
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.75);
  border: none;

  z-index: 1;

  &.disabled{
    pointer-events: none;
    opacity: 0;
  }
}

.overlay{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 250px;
  min-height: 125px;

  padding: 24px;

  border-radius: 15px;
  background-color: #181818;
}

.overlay-options{
  display: flex;
  justify-content: space-between;
}

.overlay-inputs{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100px;

  margin: 24px 0;
}

/*#endregion*/

/*#region Text*/

.text{
  cursor: default;

  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 1px;

  border-radius: 5px;
  background-color: transparent;
  padding: 6px;
  margin: 0;

  &.blue{
    color: #3597FF;
  }
  &.red{
    color: #FF0000;
  }
  &.dark{
    color: #808080;
  }

  &.title{
    font-size: 20px;
  }
  &.small{
    font-size: 12px;
  }
  &.crossed{
    color: #808080;
    text-decoration: line-through;
  }

  &.disabled{
    pointer-events: none;
  
    opacity: 0.5;
  }
  &.button{
    cursor: pointer;
  }

  &.center{
    text-align: center;
  }
}

.text:hover{
  &.red.button{
    background-color: #361C1C;
  }
  &.blue.button{
    background-color: #212B36;
  }
}

/*#endregion*/

/*#region Dots*/

.dot-container{
  display: flex;
}

.dot-loading{
  height: 7px;
  width: 7px;

  margin: 0 3px;

  animation: loading 2s infinite;
  animation-fill-mode: both;

  border-radius: 50%;
  background: #808080;
  
  &:nth-child(2) {
    animation-delay: .2s;
    margin-left: 1rem * 1.5;
  }
  
  &:nth-child(3) {
    animation-delay: .4s;
    margin-left: 1rem * 3;
  }
}

@keyframes loading {
  0% {
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}

/*#endregion*/

/*#region Input*/

.input{
  width: 100%;

  border-radius: 0;
  background-color: transparent;
  border: none;
  border-bottom: solid 2px #1F1F1F;
}

.input:hover{
  border-bottom: solid 2px #3597FF;
}

.input:focus{
  border-bottom: solid 2px #3597FF;

  outline: none;
}

.input::placeholder{
  opacity: 0.5;
}

/*#endregion*/

/*#region Checkbox*/

.input-checkbox-div{
  display: flex;
  position: relative;

  margin: 0 12px 0 6px;
}

.input-checkbox{
  appearance: none;

  width: 20px;
  height: 20px;

  margin: 0;

  border-radius: 50%;
  border: solid 2px #FFFFFF;
}

.input-checkbox:hover{
  border: solid 2px #3597FF;
}

.input-checkbox:checked{
  border-width: 5px;
}

/*#endregion*/

/*#region Type Selectors*/

a{
  text-decoration: none;
}

hr{
  display: flex;

  margin: 8px 4px;

  border: solid 1px rgba(128, 128, 128, 0.1);
}

/*#endregion*/

</style>
