<template>
	<button class="container-overlay" :disabled="!overlay">
		<div class="overlay">
			<span class="text title">Delete?</span>
			<div class="overlay-options">
				<span class="text blue button">Cancel</span>
				<span class="text blue button">Delete</span>
			</div>
		</div>
	</button>
	<div class="container-right">
		<template v-if="!list">
			<span class="text title dark center">Loading</span>
		</template>
	
		<template v-else-if="list.error">
			<span class="text title dark">Error:</span> {{ list.error }}
		</template>
	
		<template v-else>
			<div class="header">
				<a href="">
					<span class="text blue button">Back</span>
				</a>
				<span class="text title">{{ list.title }}</span>
				<span class="text red button">Delete</span>
			</div>
			<div class="container-items">
				<div class="list-detail-item" v-for="item in list.items" :key="`item-${item.id}`">
					<div>
						<input class="input-checkbox" type="checkbox">
						<div class="input-check"></div>
						<span class="text title">{{ item.name }}</span>
					</div>
					<span class="text button">{{ item.value + " " + item.unit }}</span>
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
        list: null,
        overlay: false,
    }
	},

	methods: {
		async update() {
			try {
				const { data: { data: shoppingLists } } = await axios.get('/api/v1/shopping-lists')
				this.list = shoppingLists.find(({ id }) => id == this.$route.params.id)
				console.log(this.list)
			} catch (error) {
				console.error('Error:', error)
				this.list = { error }
			}
		}
	},

	async mounted() {
		this.update()
	},

	async updated() {
		this.update()
	}
}
</script>

<style>

</style>
