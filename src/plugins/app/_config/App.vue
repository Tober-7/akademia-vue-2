<template>
	<router-view></router-view>
</template>

<script>

</script>

<style>
html, body {
  max-width: 100%;
  overflow-x: hidden;

  background-color: #202020;
}

header, body{
  margin: 0;
}

::-webkit-scrollbar {
  display: none;
}

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;

  height: 50px;
}

.container{
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: stretch;

  padding: 0 24px;
}

.text{
  cursor: default;

  font-size: 16px;
  color: #D0D0D0;
  letter-spacing: 1px;
}

.text-blue{
  color: #3597FF;
}

.text-title{
  margin: 0 0 24px 0;

  font-size: 32px;
}

.text-button{
  cursor: pointer;
}

.text-list{
  margin: 0 0 12px 0;

  font-size: 20px;
}

.lists{
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.list{
  display: flex;
  flex-direction: column;

  padding: 18px;
  margin: 12px 0;

  background-color: #404040;
  border-radius: 10px;
}

.list-items{
  display: flex;
  flex-direction: column;
}

.list-item{
  display: flex;
  justify-content: space-between;
  align-items: start;

  padding: 6px 0;
}
</style>
