<template>
  <div>
    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
              <v-card class="elevation-12">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1
                        class="text-center display-2 blue--text text--lighten-3"
                      >
                        Login to your account
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
                          v-model="login.username"
                          color="blue lighten-3"
                        />
                        <v-text-field
                          id="password"
                          label="Password"
                          name="password"
                          prepend-icon="lock"
                          type="password"
                          v-model="login.password"
                          color="blue lighten-3"
                        />
                      </v-form>
                      <h3 class="text-center mt-4">Forgot your password ?</h3>
                    </v-card-text>
                    <div class="text-center mt-3">
                      <v-btn
                        rounded
                        color="blue lighten-3"
                        dark
                        @click="loginButton"
                        >LOGIN</v-btn
                      >
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" class="blue lighten-3">
                    <v-card-text class="white--text mt-12">
                      <h1 class="text-center display-1">Hello, Friend!</h1>
                      <p
                        class="text-center"
                        style="font-family: Arial, Helvetica, sans-serif;"
                      >
                        Enter your personal details and start your journey with
                        us.
                      </p>
                    </v-card-text>
                    <div class="text-center">
                      <router-link to="/register">
                        <v-btn rounded color="primary" dark>REGISTER</v-btn>
                      </router-link>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    loginButton() {
      axios.post("/api/login", this.login).then((response) => {
        let newToken = response.data.user.api_token;
        window.token = newToken;
        let user = response.data.user;
        localStorage.setItem("token", newToken);
        localStorage.setItem("user", JSON.stringify(user));
        window.axios.defaults.params = { api_token: newToken };
        Event.$emit("login", user);
        this.$router.push("/home");
      });
    },
  },
};
</script>
