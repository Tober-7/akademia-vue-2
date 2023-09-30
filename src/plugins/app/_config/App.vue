<template>
  <div class="container-app">
    <div class="container-sidebar">
      <div class="header shadow">
        <span class="text title">Shopping List</span>
      </div>
      <div class="container-sidebar-options">
        <a href="">
          <button class="sidebar-option" :disabled="true">
            <span class="text button">Lists</span>
          </button>
        </a>
        <div v-for="item in lists" :key="`item-${item.id}`">
          <a href="`/lists/${item.id}`" @click.prevent="openShoppingListDetail(item)">
            <button class="sidebar-option" :disabled="true">
              <span class="text button"> {{ item.title }}</span>
            </button>
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
      console.log(this.lists);
		} catch (error) {
			console.error('Error:', error)
			this.lists = { error }
		}
	}
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
}

header, body{
  margin: 0;
}

::-webkit-scrollbar {
  display: none;
}

/*#endregion*/

.container-app{
  display: flex;

  min-height: 100vh;
}

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 56px;
  
  padding: 0 24px;
  
  &.shadow{
    box-shadow: 0 10px 5px -5px rgba(0, 0, 0, 0.15);    
  }
}

.container-sidebar{
  display: flex;
  flex-direction: column;
  
  width: 400px;
}

.container-right{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.container-items{
  display: flex;
  flex-direction: column;
  justify-content: left;
  flex-grow: 1;

  padding: 6px 12px;

  background-color: #181818;
}

.container-sidebar-options{
  display: flex;
  flex-direction: column;
  
  padding: 12px;
  margin: 24px 0 0 0;
}

.sidebar-option{
  cursor: pointer;
  pointer-events: none;

  display: flex;

  width: 100%;

  padding: 12px;
  margin: 6px 0;

  background-color: rgba(53, 151, 255, 0.1);

  border-radius: 5px;
  border: none;
}

.sidebar-option:disabled{
  background-color: transparent;
}

.container-overlay{
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  border: none;
}

.container-overlay:disabled{
  display: none;
}

.overlay{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 250px;
  height: 150px;

  padding: 24px;

  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.75);
}

.overlay-options{
  display: flex;
  justify-content: space-between;
}

.input{
  background-color: transparent;
  border: none;
  border-bottom: solid 1px #808080;
}

.input:hover{
  border-bottom: solid 1px #3597FF;
}

.input:focus{
  outline: none;
  border-bottom: solid 1px #808080;
}

.input::placeholder{
  opacity: 0.5;
}

.input-checkbox{
  appearance: none;

  width: 20px;
  height: 20px;

  margin: 0 12px 0 0;

  border-radius: 2px;
  border: solid 1px #808080;
}

.input-checkbox:hover{
  border: solid 1px #3597FF;
}

.input-check{
  pointer-events: none;

  position: absolute;

  width: 0px;
  height: 0px;

  border-radius: 2px;
  background-color: #808080;

  transform: translate(5px, 0.5px);
}

.input-checkbox:hover ~ .input-check{
  background-color: #3597FF;
}

.input-checkbox:checked ~ .input-check{
  width: 10px;
  height: 10px;
}

a{
  color: transparent;
}

.text{
  cursor: default;

  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 1px;

  background-color: transparent;
  border: none;
  padding: 0;
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
  &.button{
    cursor: pointer;
  }
  &.center{
    text-align: center;
  }
}

.text:disabled{
  cursor: default;
  
  opacity: 0.5;
}

.lists{
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.list{
  display: flex;
  flex-direction: column;

  padding: 20px;
  margin: 12px 0;

  background-color: #1F1F1F;
  border-radius: 10px;
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

.list-detail-item{
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px;
  margin: 6px 0;

  border-radius: 5px;
  background-color: #1f1f1f;
}

.list-detail-item > div{
  display: flex;
  align-items: center;
}
</style>
