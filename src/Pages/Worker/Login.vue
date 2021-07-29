<template>
  <div class="container" style="text-align:center">
    <h1>Worker Login</h1>

    <br />
    <br />
    <div class="col-lg-8 offset-lg-4 col-md-6 offset-md-3" style="text-align:center">
      <form novalidate class="md-layout" @submit.prevent="validateUser">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
          <md-card-header>
            <div class="md-title">Worker Login</div>
          </md-card-header>

          <md-card-content>
            <md-field :class="getValidationClass('email')">
              <label for="email">Email</label>
              <md-input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                v-model="form.email"
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
              <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
            </md-field>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('password')">
                  <label for="last-name">Password</label>
                  <md-input
                    name="Password"
                    id="password"
                    type="password"
                    autocomplete="nope"
                    v-model="form.password"
                    :disabled="sending"
                  />
                  <span class="md-error" v-if="!$v.form.password.required">The Password is required</span>
                  <span class="md-error" v-else-if="!$v.form.password.minlength">Min 6 Characters</span>
                </md-field>
              </div>
            </div>
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />
          <md-button class="md-primary float-left">
            <Router-link to="/WorkerReg" id="link">Register Now</Router-link>
          </md-button>
          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Login</md-button>
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "WorkerLogin",
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: null,
      password: null
    },

    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      password: {
        required,
        minLength: minLength(6)
      },
      email: {
        required,
        email
      }
    }
  },
  computed: {},
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.password = null;
      this.form.email = null;
    },
    saveUser() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = "User";
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#link {
  color: blue;
  text-decoration: none;
}

Router-link:hover {
  color: #00a0c6;
  text-decoration: none;
  cursor: pointer;
}
</style>