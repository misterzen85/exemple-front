<template>
    <div>
        <v-client-table :data="testData" :columns="columns" :options="options">
          <template slot="Details" slot-scope="props">
            <router-link class="btn btn-block btn-outline-primary faa-parent animated-hover" :to="{ name: 'tickets-card', params: {ticketid: props.row['ID']}}">
              <i class="far fa-eye faa-flash"></i> Fiche
            </router-link>  
          </template>
        </v-client-table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      columns: ['ID', 'Title', 'Transmitter', 'Receiver', 'Date', 'Status', 'Priority', 'Module', 'Details'],
      options: {
        headings: {'ID': 'ID', 'Title': 'Titre', 'Transmitter': 'Emetteur', 'Receiver': 'Recepteur', 'Date': 'Date', 'Status': 'Statut', 'Priority': 'Priorité', 'Module': 'Module', Details: 'Détails'},
        skin: 'table-striped table-condensed table-hover',
        filterable: true,
        sortIcon: { base: 'fa', up: 'fa-sort-asc', down: 'fa-sort-desc', is: 'fa-sort' },
        // fa -> Font Awesome 5 : Librairie d'icônes gratuites
        texts: {
          count: 'Affichage de {from} à {to} sur {count}',
          filter: 'Filtrer résultats :   ',
          filterPlaceholder: 'Tapez votre recherche...',
          limit: 'Par page :',
          noResults: 'Aucun résultat',
          page: 'Page:',
          loading: 'Chargement...',
          defaultOption: 'Select {column}'
        }
      }
    }
  },

  beforeMount () {
    this.$store.dispatch('ticket/fetchTickets')
  },

  computed: {
    tableData () {
      return [
        { id: 1, name: 'John', age: '20' },
        { id: 2, name: 'Jane', age: '24' },
        { id: 3, name: 'Susan', age: '16' },
        { id: 4, name: 'Chris', age: '55' },
        { id: 5, name: 'Dan', age: '40' }
      ]
    },
    testData () {
      return this.$store.getters['ticket/tickets']
    }
  }
}

</script>
