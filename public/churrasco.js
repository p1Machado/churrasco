var tableConvidados = Vue.component('table-convidados', {
  template: `
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Confirmado</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="convidado in convidados">
        <td>{{convidado.nome}}</td>
        <td>
          <i v-if="convidado.confirmado" class="fa fa-check" aria-hidden="true"></i>
          <i v-else class="fa fa-times" aria-hidden="true"></i>
        </td>
      </tr>
    </tbody>
  </table>
  `,
  props: [ 'convidados' ]
});

var app = new Vue({
  el: '#table-convidados',
  data: {
    convidados: [
      {
        nome: 'Marcio', confirmado: false
      },
      {
        nome: 'Nilton', confirmado: true
      },
      {
        nome: 'Rafael Mateus', confirmado: true
      },
      {
        nome: 'Raissa', confirmado: true
      },
      {
        nome: 'Rian', confirmado: false
      },
      {
        nome: 'Namorada Rian', confirmado: false
      }

    ]
  },
  components: {
    'table-convidados': tableConvidados
  }
})
