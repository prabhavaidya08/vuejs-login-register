<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="blue lighten-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Welcome Back!</h1>
                    <p
                      class="text-center"
                      style="font-family: Arial, Helvetica, sans-serif;"
                    >
                      To Keep connected with us please login with your personnel
                      info
                    </p>
                  </v-card-text>
                  <div class="text-center">
                    <router-link to="/login">
                      <v-btn rounded color="primary" dark>LOGIN</v-btn>
                    </router-link>
                  </div>
                </v-col>

                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1
                      class="text-center display-2 blue--text text--lighten-3"
                    >
                      Create Account
                    </h1>
                    <div class="text-center mt-4">
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-facebook-f</v-icon>
                      </v-btn>

                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-google-plus-g</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-linkedin-in</v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center mt-4">
                      Ensure your email for registration
                    </h4>
                    <v-form>
                      <v-text-field
                        label="Username"
                        name="Name"
                        prepend-icon="person"
                        type="text"
                        v-model="register.username"
                        color="blue lighten-3"
                      />
                      <v-text-field
                        label="Email"
                        name="Email"
                        prepend-icon="email"
                        type="text"
                        v-model="register.email"
                        color="blue lighten-3"
                      />

                      <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="lock"
                        type="password"
                        v-model="register.password"
                        color="blue lighten-3"
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-n5">
                    <v-btn
                      rounded
                      color="blue lighten-3"
                      dark
                      @click="registerButton"
                      >REGISTER</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      register: {
        username: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    registerButton() {
      axios
        .post("/api/register", this.register)
        .then((response) => {
          let token = response.data.user.api_token;
          localStorage.setItem("token", token);
        });
    },
  },
};
</script>
