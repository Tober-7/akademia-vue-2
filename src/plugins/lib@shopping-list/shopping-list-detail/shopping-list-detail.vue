<template>
	<div class="container-overlay" :class="{disabled: !overlay}">
		<div v-if="overlayDelete">
			<div class="overlay">
				<span class="text title">Delete?</span>
				<div class="overlay-options">
					<span class="text blue button" @click="deleteList(false, false)">Cancel</span>
					<a class="text blue button" @click="deleteList(false, true)" href="" @click.prevent="openLists">Delete</a>
				</div>
			</div>
		</div>
		<div v-else-if="overlayValues">
			<div class="overlay">
				<span class="text title">Change Values</span>
				<div class="overlay-inputs">
					<input class="input text" type="number" min="0" max="1000" v-model="quantityInput" @keyup.enter="changeItemValues(false, true, null)">
					<input class="input text" type="text" placeholder="ks, kg, ml..." maxlength="18" spellcheck="false" v-model="unitInput" @keyup.enter="changeItemValues(false, true, null)">
				</div>
				<div class="overlay-options">
					<span class="text blue button" @click="changeItemValues(false, false, null)">Cancel</span>
					<a class="text blue button" @click="changeItemValues(false, true, null)">Submit</a>
				</div>
			</div>
		</div>
	</div>
	<div class="container-right">
		<template v-if="!list">
			<div class="header"></div>
			<div class="container-loading">
				<span class="text title dark center">Loading</span>
			</div>
		</template>
	
		<template v-else-if="list.error">
			<div class="header"></div>
			<div class="container-loading">
				<span class="text title dark">Error:</span> {{ list.error }}
			</div>
		</template>
	
		<template v-else>
			<div class="header">
				<a href="" @click.prevent="openLists">
					<span class="text blue button">Back</span>
				</a>
				<span class="text title">{{ list.title }}</span>
				<span class="text red button" @click="deleteList(true, false)">Delete</span>
			</div>
			<div class="container-items">
				<div class="list-detail-item" v-for="item in list.items" :key="`item-${item.id}`">
					<div>
						<div class="input-checkbox-div">
							<input class="input-checkbox" :checked="isChecked(item)" type="checkbox" @change="updateCheckbox(item)">
						</div>
						<span class="text title">{{ item.name }}</span>
					</div>
					<div>
						<span class="text blue button" @click="changeItemValues(true, false, item)">{{ item.value + " " + item.unit }}</span>
						<span class="text red button" style="margin-left: 16px;" @click="deleteListItem(item)">Remove</span>
					</div>
				</div>
				<div class="list-detail-item">
					<input class="input text" type="text" placeholder="Ingredients..." spellcheck="false" v-model="addItemInput" @keyup.enter="addItem">
				</div>
				<template v-if="!canInteract">
					<hr>
					<div class="container-loading">
						<span class="text title dark center">Loading</span>
					</div>
				</template>
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

			canInteract: true,

			addItemInput: "",
			quantityInput: "",
			unitInput: "",

			tempItem: null,
	
			overlay: false,
			overlayDelete: false,
			overlayValues: false,
    }
	},

	methods: {
		async update() {
			try {
				const { data: { data: shoppingLists } } = await axios.get('/api/v1/shopping-lists')
				const list = shoppingLists.find(({ id }) => id == this.$route.params.id)

				this.list = list;
			} catch (error) {
				console.error('Error:', error)
				this.list = { error }
			}
		},

		async updateCheckbox({ id: itemId }) {
			try {
				const item = this.list.items.find(({ id }) => id == itemId);
				await axios.put(`/api/v1/shopping-lists/${this.$route.params.id}/items/${itemId}`, 
				{
					id: item.id, 
					name: item.name, 
					value: item.value, 
					unit: item.unit, 
					is_checked: !item.is_checked
				})
			} catch (error) {
				console.error('Error:', error);
			}
		},

		async addItem() {
			if (!this.canInteract) return;

			try {
				if (this.addItemInput == "") return;

				this.canInteract = false;
				
				const itemName = this.addItemInput;
				this.addItemInput = "";

				await axios.post(`/api/v1/shopping-lists/${this.$route.params.id}/items`, 
				{
					id: this.list.items.length != 0 ? this.list.items[0].id + 1 : 0, 
					name: itemName, 
					value: "1", 
					unit: "piece", 
					is_checked: false
				})
			} catch (error) {
				console.error('Error:', error);
			}

			this.canInteract = true
		},

		async deleteList(overlay, del) {
			if (!this.canInteract) return;

			try {
				if (overlay){
					this.overlayDelete = overlay;
					this.overlayValues = !overlay;
				}
				this.overlay = overlay
	
				if (!del) return;

				this.canInteract = false;
	
				await axios.delete(`/api/v1/shopping-lists/${this.$route.params.id}`)
			} catch (error) {
				console.error('Error:', error)
			}

			this.canInteract = true;
		},

		async deleteListItem({ id: itemId }) {
			if (!this.canInteract) return;

			this.canInteract = false;

			try {
				await axios.delete(`/api/v1/shopping-lists/${this.$route.params.id}/items/${itemId}`)
			} catch (error) {
				console.error('Error:', error)
			}

			this.canInteract = true;
		},

		async changeItemValues(overlay, change, item) {
			if (item){
				this.tempItem = item;
				this.quantityInput = item.value;
				this.unitInput = item.unit;
			}

			if (overlay){
				this.overlayValues = overlay;
				this.overlayDelete = !overlay;
			}
			this.overlay = overlay

			if (!change || !this.tempItem) return;

			await axios.put(`/api/v1/shopping-lists/${this.$route.params.id}/items/${this.tempItem.id}`, 
			{
				id: this.tempItem.id, 
				name: this.tempItem.name, 
				value: this.quantityInput, 
				unit: this.unitInput, 
				is_checked: this.tempItem.is_checked
			})
		},

		isChecked({ id: itemId }) {
			return this.list.items.find((item) => item.id == itemId).is_checked ? true : false;
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

<style scoped>
/*#region List Detail*/

.list-detail-item{
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px;
  margin: 6px 0;

  border-radius: 5px;
  background-color: #1F1F1F;
}

.list-detail-item > div{
  display: flex;
  align-items: center;
}

/*#endregion*/

</style>
