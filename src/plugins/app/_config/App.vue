<template>
  <div class="container-app">
    <div class="container-sidebar">
      <div class="header shadow">
        <span class="text title">Shopping List</span>
      </div>
      <div class="container-sidebar-options">
        <div class="sidebar-options" v-for="item in lists" :key="`item-${item.id}`">
          <span class="text"> {{ item.title }}</span>
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

  padding: 0 12px;

  background-color: #181818;
}

.container-sidebar-options{
  display: flex;
  flex-direction: column;
  
  padding: 12px;
  margin: 24px 0 0 0;
}

.sidebar-options{
  cursor: pointer;

  display: flex;

  padding: 12px;
  margin: 6px 0;
}

.text{
  cursor: default;

  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 1px;

  &.blue{
    color: #3597FF;
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
</style>
