<template>
  <Navbar />
  <router-view />
  <section class="src-components-formulario">
    <h1>FORMULARIO</h1>
    <div class="jumbotron">
      <form novalidate autocomplete="off" @submit.prevent="sendForm()">
        <div class="form-group">
          <label for="fname">Full name:</label><br />
          <input
            type="text"
            id="fname"
            class="form-control"
            v-model="$v.f.name_user.$model"
          />
          <div
            v-if="$v.f.name_user.$error && $v.f.name_user.$dirty"
            class="alert alert-danger mt-1"
          >
            <div v-if="$v.f.name_user.required.$invalid">
              {{ $v.f.name_user.required.$message }}
            </div>
          </div>
        </div>
        <br />
        <div class="form-group">
          <label for="lname">E-mail:</label><br />
          <input
            type="text"
            id="lname"
            name="lname"
            class="form-control"
            v-model="$v.f.mail_user.$model"
          />
          <div
            v-if="$v.f.mail_user.$error && $v.f.mail_user.$dirty"
            class="alert alert-danger mt-1"
          >
            <div v-if="$v.f.mail_user.email.$invalid">
              {{ $v.f.mail_user.email.$message }}
            </div>
            <div v-if="$v.f.mail_user.required.$invalid">
              {{ $v.f.mail_user.required.$message }}
            </div>
          </div>
        </div>
        <div class="form group">
          <label for="todo">TO-DO:</label><br />
          <input
            type="text"
            id="todo"
            name="todo"
            class="form-control"
            v-model="$v.f.todo_user.$model"
          />
          <div
            v-if="$v.f.todo_user.$error && $v.f.todo_user.$dirty"
            class="alert alert-danger mt-3"
          >
            <div v-if="$v.f.todo_user.required.$invalid">
              {{ $v.f.todo_user.required.$message }}
            </div>
            <div v-if="$v.f.todo_user.minLength.$invalid">
              {{ $v.f.todo_user.minLength.$message }}
            </div>
            <div v-if="$v.f.todo_user.maxLength.$invalid">
              {{ $v.f.todo_user.maxLength.$message }}
            </div>
          </div>
        </div>

        <div class="form-group">
          <input type="submit" class="btn btn-succes mt-5" value="Enviar" :disabled="$v.$invalid">
        </div>
      </form>
    </div>
    <pre>{{ $v }}</pre>
  </section>
</template>

<script>
import Navbar from "./Navbar.vue";
import { email, required, minLength, maxLength } from "@vuelidate/validators";
export default {
  name: "src-components-formulario",
  props: [],
  components: {
    Navbar,
  },
  mounted() {},
  data() {
    return {
      f: this.resetCells(),
      url:'https://5f833c646b97440016f4e4f5.mockapi.io/tp7datos'
    };
  },
  validations: {
    f: {
      name_user: { required },
      mail_user: { required, email },
      todo_user: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(50),
      },
    },
  },
  methods: {
    resetCells() {
      return {
        name_user: "",
        mail_user: "",
        todo_user: "",
      };
    },
    async sendForm(){
      this.$v.$touch()
      if(!this.$v.invalid){
        let form = this.f
        console.log(form);
        await this.sendFormToAxios(form);
        this.f = this.resetCells();
        this.$v.$reset()

      }else{
        this.f = this.resetCells();
        this.$v.$reset()
      }
    },
   async sendFormToAxios(form){
      try{
        let resp = await this.axios.post(this.url, form,{
          'content-type':'application/json'
        })
        console.log(resp.data);
      }catch(err){
        console.log("es un error desde console log >>>>>>",err);
      }

    }
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-formulario {
}
</style>
