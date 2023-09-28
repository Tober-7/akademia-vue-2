<template>
    <div class="header">
        <span></span>
        <span class="text text-blue text-button">Add</span>
    </div>
    <div class="container">
        <span class="text text-title">My Lists</span>
        <div class="lists" v-for="item in lists" :key="`item-${item.id}`">
            <div class="list">
                <span class="text text-list">{{ item.name }}</span>
                <div class="list-items" v-for="item in item.items" :key="`item-${item.id}`">
                    <div class="list-item">
                        <span class="text">{{ item.item }}</span>
                        <span class="text text-blue">{{ item.quantity }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 0,
          name: "List 1",
          items: [
            {
              id: 0,
              item: "Item 1",
              quantity: "1 piece"
            },
            {
              id: 1,
              item: "Item 2",
              quantity: "1 piece"
            }
          ]
        },
        {
          id: 1,
          name: "List 2",
          items: [
            {
              id: 0,
              item: "Item 1",
              quantity: "1 piece"
            },
            {
              id: 1,
              item: "Item 2",
              quantity: "1 piece"
            },
            {
              id: 2,
              item: "Item 3",
              quantity: "1 piece"
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
