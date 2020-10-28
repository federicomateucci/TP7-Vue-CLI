<template>
  <section class="src-components-login">
    <Navbar />
    <router-view/>

    <div class="jumbotron">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required 
      v-model="$v.f.nombre.$model"/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required 
      v-model="$v.f.pass.$model"/>

      <button type="submit" @submit.prevent="validate()">Login</button>
      
    </div>
    <pre>{{$v}}</pre>
  </section>
</template>

<script>
import { required } from "@vuelidate/validators";
import Navbar from "./Navbar.vue";

export default {
  name: "src-components-login",
  props: ['valido'],
  components: {
    Navbar,
  },

  mounted() {},
  data() {
    return {
      f: this.restartCells(),
      validLog: false,
      
    };
  },
  validations: {
    f: { nombre: { required }, pass: { required } },
  },
  methods: {
    async validate() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        if (this.f.nombre == "root" && this.f.pass == 123) {
          console.log("ok");
          this.validLog = true;
          this.$router.push("/Navbar");
        }
        this.f = this.restartCells();
        this.$v.$reset();
      } else {
        this.f = this.restartCells();
        this.$v.$reset();
      }
    },
    restartCells() {
      return {
        nombre: "",
        pass: "",
      };
    },
  },

  computed: {},
};
</script>

<style scoped lang="css">
.src-components-login {
}
pre {
  color: black;
}
</style>
