<template>
  <Navbar />
  <router-view />
  <section class="src-components-lista">
    <div class="table-responsive">
      <table class="table">
        <tr class="bg-succes text-black">
          <th>Nombre Completo</th>
          <th>E-Mail</th>
          <th>Fecha</th>
          <th>TO-DO</th>
        </tr>
        <tr
          class="bg-info text-black"
          v-for="(tarea, index) in tareas"
          :key="index"
        >
          <td>{{ tarea.name_user }}</td>
          <td>{{ tarea.mail_user }}</td>
          <td>{{formatearFecha(tarea.fecha_created) }}</td>
          <td>{{ tarea.todo_user }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import Navbar from "./Navbar.vue";
import Filtros from '../Filtros.js'


export default {
  name: "src-components-lista",
  mixins: [Filtros],
  props: [],

  components: {
    Navbar,
  },
  mounted() {
    this.getFromAxios();
  },
  data() {
    return {
      url: "https://5f833c646b97440016f4e4f5.mockapi.io/tp7datos",
      tareas: [],
    };
  },
  methods: {
    async getFromAxios() {
      try {
        let resp = await this.axios(this.url);
        console.log(resp.data);
        this.tareas = resp.data;
      } catch (err) {
        console.log("error en getdatos desde console log", err);
      }
    },
    // convert(fecha){
    //   return new Date(fecha).toLocaleString();
    // }
  }
  ,
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-lista {
}
</style>
