<template>
  <div>
    <v-layout class="my-16">
      <v-flex xs10 sm10 md6 lg5 class="mx-auto">
        <v-card outlined color="#e4e4e4" class="pa-5">
          <v-card-title class="text-h5 font-weight-bold">{{
            submitButtonCaption
          }}</v-card-title>
          <v-card-subtitle class="py-2">{{
            `${submitButtonCaption} to access enterprise owner features`
          }}</v-card-subtitle>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model.trim="email"
                type="email"
                label="Email"
                required
              ></v-text-field>
              <v-text-field
                v-model.trim="password"
                type="password"
                label="password"
                required
              ></v-text-field>
              <v-card-text class="red--text" v-if="!formIsValid"
                >please enter valid email and password</v-card-text
              >
              <v-card-text class="red--text" v-else-if="error"
                >Please check your email and password</v-card-text
              >
              <v-card-text class="red--text" v-else-if="signupError"
                >Account already registered</v-card-text
              >
              <v-btn
                :loading="this.isLoading"
                color="primary"
                @click="submitForm"
                class="my-6"
                >{{ submitButtonCaption }}</v-btn
              >
              <v-btn
                text
                color="primary"
                class="my-6 mx-4"
                @click="switchAuthMode"
                >{{ switchModeButtonCaption }}</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "Login",
      isLoading: false,
      error: false,
      signupError: false,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "Login") {
        return "Login";
      } else {
        return "Signup";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "Login") {
        return "Signup";
      } else {
        return "Login";
      }
    },
  },
  methods: {
    async submitForm() {
      this.error = false;
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      try {
        if (this.mode == "Login") {
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password,
          });
        } else {
          await this.$store.dispatch("signup", {
            email: this.email,
            password: this.password,
          });
        }
        const redirectUrl = "/" + (this.$route.query.redirect || "enterprises");
        this.$router.replace(redirectUrl);
      } catch (error) {
        if (this.mode == "Signup") {
          this.signupError = true;
        } else {
          this.error = true;
        }
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === "Login") {
        this.mode = "Signup";
      } else {
        this.mode = "Login";
      }
    },
  },
};
</script>
