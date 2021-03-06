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
        nome: 'Esposa do Nilton', confirmado: true
      },
      {
        nome: 'Rafael Mateus', confirmado: true
      },
      {
        nome: 'Raissa', confirmado: true
      },
      {
        nome: 'Alexandre', confirmado: true
      },
      {
        nome: 'Rian', confirmado: true
      },
      {
        nome: 'Namorada do Rian', confirmado: true
      },
      {
        nome: 'Claudio Reis', confirmado: true
      },
      {
        nome: 'Matheus', confirmado: true
      },
      {
        nome: 'Namorada do Matheus', confirmado: true
      },
      {
        nome: 'Patrick', confirmado: true
      },
      {
        nome: 'Alana', confirmado: true
      },
      {
        nome: 'Sérgio (Pai do Patrick)', confirmado: true
      },
      {
        nome: 'Eliete (Mãe do Patrick)', confirmado: true
      },
      {
        nome: 'Pablo', confirmado: false
      }
    ]
  },
  computed: {
    sortedConvidados: function () {
      return this.convidados.sort(function(a,b) {
		  return a.nome > b.nome;
	  });
    }
  },
  components: {
    'table-convidados': tableConvidados
  }
})
