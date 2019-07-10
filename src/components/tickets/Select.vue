<template>
  <div>
    <multiselect @select="selectedValue" v-model="selectedElements" open-direction="bottom" selectLabel="Entrée pour selectionner" placeholder="Tapez pour rechercher..." :custom-label="elementLabel" :options="elements" :searchable="true" :loading="isLoading" :show-no-results="true" :internal-search="false" :max-height="600" @search-change="asyncFind">
      <template slot="clear" slot-scope="props"></template>
      <span class="text-warning" slot="noResult"><strong><i class="fa fa-frown-o"></i> Oops! Aucun élément trouvé, faute de frappe ?</strong></span>
    </multiselect>
    <p v-for="(user, ID) in users" :key="ID"></p> <!-- FIX BUG SELECTVUE -->
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import ApiUser from '@/api/User'

export default {
  components: { Multiselect },

  created () {
    this.$store.dispatch('user/fetchUsers')
  },

  computed: { // Au moment ou la page à finie de charger
    users () {
      this.elements = this.$store.getters['user/users']
      return this.$store.getters['user/users']
    }
  },

  data () {
    return {
      selectedElements: [],
      elements: [],
      isLoading: false
    }
  },

  methods: {
    selectedElements: (value, id) => {
      ApiUser.userById(value['ID']).then((res) => {
        value = res.data.data
        this.$emit('valueSelected', value)
      })
    },

    elementLabel ({ ID, Name }) {
      return `${ID} - ${Name}`
    },

    asyncFind (query) {
      this.isLoading = true
      ApiUser.userById(query).then((res) => {
        this.elements = res.data.data
        this.isLoading = false
      })
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
