<template>
  <div class="home">
    <br />
    <br />
    <h1>Home Page</h1>
    <br />
    <br />
    <br />
    <div class="container col-lg-4 offset-lg-4 col-md-3 offset-md-6">
      <form @submit.prevent="Formsubmit">
        <md-field>
          <label>Only images</label>
          <md-file id="single" @change="upload_avatar" />
        </md-field>
        <md-button class="md-raised md-accent" type="submit">Upload</md-button>
      </form>
    </div>
    <p v-if="path">
   <img v-bind:src="'data:image/png;base64,' + path" /> 
    
    </p>
    
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
const Api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});
export default {
  name: "home",
  components: {},
  data: () => ({
    single: null,
    path: null,
    path1: null
  }),
  methods: {
    ...mapActions("Admin", ["uploadimage"]),
    upload_avatar(e) {
      this.single = e.target.files[0];
      console.log(this.single);
    },
    Formsubmit() {
      let formData = new FormData();
      formData.append("file", this.single);
      formData.append("title", "hammad");
      Api.post("uploadfile", formData)
        .then(response => {
          this.path = response.data.File;
          console.log(response.data.Type);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
