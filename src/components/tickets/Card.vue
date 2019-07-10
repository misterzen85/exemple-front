<template>
    <div>
      <div class="alert alert-success alert-dismissible fade show animated pulse" role="alert">
        data
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <i class="far fa-times-circle"></i>
        </button>
      </div>
      <h1>{{ ticket.ID }} </h1>
      <form>
        <div class="form-group col-lg-6 col-sm-12">
          <div class="form-group row">
            <label for="name" class="col-3 col-form-label">Nom</label>
            <input v-model="form.title" type="text" class="col-9 form-control" id="name" :placeholder="ticket.Title">
          </div>
          <div class="form-group row">
            <button type="button" @click="submit" class="btn btn-outline-success"><i class="far fa-save"></i> Enregistrer</button>
          </div>
        </div>            
      </form>
      <div class="col-lg-6 col-sm-12">
          <multi-select @valueSelected="onSelect"></multi-select>
      </div>
    </div>
</template>

<script>
import Select from './Select'

export default {
  components: { 'multi-select': Select },

  computed: { // Au moment ou la page à finie de charger
    ticket () {
      return this.$store.getters['ticket/tickets']
    }
  },

  created () { // Lorsque le HTML est interpreté
    this.$store.dispatch('ticket/fetchTicketById', this.$route.params.ticketid)
  },

  data () { // Donnée à utiliser
    return {
      form: {
        title: null
      },
      selected: null,
      selectedElements: null
    }
  },

  methods: {
    onSelect: function (element) {
      this.selectedElements = element
      // this.$set(this.form, 'no', element['ID'])
      // this.$set(this.form, 'name', element['Name'])
    },

    filter: function (id) {
      this.elementLabel = ''
      this.$set(this.form, 'name', '')
    },

    submit: function () {
      this.$store.dispatch('ticket/saveTicket', {no: this.$route.params.ticketid, data: this.form})
    }
  }
}
</script>
