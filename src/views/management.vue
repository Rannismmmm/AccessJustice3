<template>
        <v-data-table
        :headers="headers"
        :items="rows"
        :expand="expand"
        item-key="id"
        >
          <template v-slot:items="props">
            <tr @click="props.expanded = !props.expanded">
              <td>{{props.item.id}}</td>
              <td class="text-xs-right">{{props.item.title}}</td>
              <td class="text-xs-right">{{props.item.semester}}</td>
            </tr>
          </template>
          <template v-slot:expand="props">
            <v-card flat>
              <v-card-text>{{props.item.description}}</v-card-text>
            </v-card>
          </template>
        </v-data-table>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'management',
    data() {
      return {
        expand:false,
        headers:[
          {
            text: 'Id',
            align: 'left',
            sortable: false,
            value: 'id'
          },
          {
            text: 'Title',
            align: 'right',
            sortable: false,
            value: 'title'
          },
          {
            text: 'Semester',
            align: 'right',
            sortable: false,
            value: 'semester'
          }

        ],

        rows: []
      }
    },

    mounted () {
      axios
        .get('http://118.138.74.5:8090/RevisionHero/webresources/entity.course')
        .then(response => (
          this.rows = response.data
        ))
        .catch(() => {
          this.rows = []
        })
    }
  }
</script>

<style scoped>

</style>