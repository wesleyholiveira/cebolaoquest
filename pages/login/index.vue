<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-alert
          :type="response.type"
          v-if="!!response.message && response.message.length > 0"
        >
          {{ response.message }}
        </v-alert>
      </v-col>
      <v-col cols="12">
        <v-fab-transition>
          <v-card
            max-width="400"
            class="mx-auto"
            ref="login"
            v-show="expandLogin"
          >
            <v-form
              ref="formLogin"
              v-on:submit.prevent="sendLogin()"
              v-model="valid"
              lazy-validation
            >
              <h2 class="form--title">LOGIN</h2>
              <v-row class="px-4">
                <v-col cols="12">
                  <v-text-field
                    v-model="login.username"
                    :counter="usernameMaxChars"
                    :rules="usernameRules"
                    label="Usuário"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="login.password"
                    :counter="passwordMaxChars"
                    :rules="passwordRules"
                    type="password"
                    label="Senha"
                  />
                </v-col>
                <v-col cols="12">
                  <div id="login-captcha"></div>
                </v-col>
                <v-col cols="12">
                  <v-row class="mb-2">
                    <v-card-actions>
                      <v-btn
                        class="green darken-1"
                        :disabled="!valid"
                        type="submit"
                        >Enviar</v-btn
                      >
                      <v-btn
                        class="blue darken-1"
                        @click="
                          expandLogin = false
                          expandRegister = true
                        "
                        >Cadastrar</v-btn
                      >
                    </v-card-actions>
                  </v-row>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-fab-transition>
        <v-fab-transition>
          <v-card
            max-width="400"
            class="mx-auto"
            ref="register"
            v-show="expandRegister"
          >
            <h2 class="form--title">CADASTRO</h2>
            <v-form
              ref="formRegister"
              @submit.prevent="sendRegister()"
              v-model="valid"
              lazy-validation
            >
              <v-row class="px-4">
                <v-col cols="12">
                  <v-text-field
                    v-model="register.username"
                    :counter="usernameMaxChars"
                    :rules="usernameRules"
                    label="Usuário"
                    type="text"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="register.email"
                    :counter="emailMaxChars"
                    :rules="emailRules"
                    label="Email"
                    type="email"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="register.password"
                    :counter="passwordMaxChars"
                    :rules="passwordRules"
                    label="Senha"
                    type="password"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="register.confirmPassword"
                    :counter="passwordMaxChars"
                    :rules="confirmPasswordRules"
                    type="password"
                    label="Confirme sua senha"
                  />
                </v-col>
                <v-col cols="12">
                  <div id="register-captcha"></div>
                </v-col>
                <v-col cols="12">
                  <v-row class="mb-2">
                    <v-card-actions>
                      <v-btn
                        class="green darken-1"
                        :disabled="!valid"
                        type="submit"
                        >Enviar</v-btn
                      >
                      <v-btn
                        class="blue darken-1"
                        @click="
                          expandLogin = true
                          expandRegister = false
                        "
                        >Login</v-btn
                      >
                    </v-card-actions>
                  </v-row>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-fab-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async mounted() {
    await this.$recaptcha.init()
    this.widgetIdLogin = this.$recaptcha.render('login-captcha', {
      sitekey: '6Lfl7Q4bAAAAACeqbHdKUNnYpJzdSzg6cjJa9_-E',
    })

    this.widgetIdRegister = this.$recaptcha.render('register-captcha', {
      sitekey: '6Lfl7Q4bAAAAACeqbHdKUNnYpJzdSzg6cjJa9_-E',
    })
  },

  data: (instance) => ({
    valid: true,
    expandLogin: true,
    expandRegister: false,
    widgetIdLogin: 0,
    widgetIdRegister: 0,
    usernameMinChars: 4,
    usernameMaxChars: 40,
    usernameRules: [
      (v) => !!v || 'Este campo é obrigatório',
      (v) =>
        (!!v && v.length >= instance.usernameMinChars) ||
        `Este campo deve conter no mínimo ${instance.usernameMinChars} caracteres`,
      (v) =>
        (!!v && v.length <= instance.usernameMaxChars) ||
        `Este campo excedeu o limite de ${instance.usernameMaxChars} caracteres`,
    ],
    passwordMinChars: 4,
    passwordMaxChars: 40,
    passwordRules: [
      (v) => !!v || 'Este campo é obrigatório',
      (v) =>
        (!!v && v.length >= instance.passwordMinChars) ||
        `Este campo deve conter no mínimo ${instance.passwordMinChars} caracteres`,
      (v) =>
        (!!v && v.length <= instance.passwordMaxChars) ||
        `Este campo excedeu o limite de ${instance.passwordMaxChars} caracteres`,
    ],
    emailMinChars: 10,
    emailMaxChars: 120,
    emailFormatRegEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
    emailRules: [
      (v) => !!v || 'Este campo é obrigatório',
      (v) =>
        (!!v && v.length >= instance.emailMinChars) ||
        `Este campo deve conter no mínimo ${instance.emailMinChars} caracteres`,
      (v) =>
        (!!v && v.length <= instance.emailMaxChars) ||
        `Este campo excedeu o limite de ${instance.emailMaxChars} caracteres`,
      (v) =>
        (!!v && instance.emailFormatRegEx.test(v)) ||
        `Formato de email inválido`,
    ],
    confirmPasswordRules: [
      (v) => !!v || 'Este campo é obrigatório',
      (v) =>
        (!!v && v.length >= instance.passwordMinChars) ||
        `Este campo deve conter no mínimo ${instance.passwordMinChars} caracteres`,
      (v) =>
        (!!v && v.length <= instance.passwordMaxChars) ||
        `Este campo excedeu o limite de ${instance.passwordMaxChars} caracteres`,
      (v) =>
        (!!v && v == instance.register.password) || 'As senhas não conferem',
    ],
    login: {},
    register: {},
    response: {
      error: false,
      message: '',
    },
  }),

  methods: {
    async sendLogin() {
      try {
        let recaptchaToken
        try {
          recaptchaToken = await this.$recaptcha.getResponse(this.widgetIdLogin)
        } catch (captchaErr) {
          recaptchaToken = undefined
        }

        const response = await this.$auth.loginWith('local', {
          data: {
            ...this.login,
            recaptchaToken,
          },
        })

        const { userId, username, token, isAdmin } = response.data
        this.$refs.formLogin.reset()
        this.$auth.setUser({ id: userId, username, token, isAdmin })
      } catch (err) {
        console.log(err)
        const {
          data: { message },
        } = err.response
        this.response.type = 'error'
        this.response.message = message

        await this.$recaptcha.reset(this.widgetIdLogin)
      }
    },

    async sendRegister() {
      try {
        let recaptchaToken
        try {
          recaptchaToken = await this.$recaptcha.getResponse(this.widgetIdRegister)
        } catch (captchaErr) {
          recaptchaToken = undefined
        }
        const response = await this.$axios.post('/api/register', {
          data: {
            ...this.register,
            recaptchaToken,
          },
        })
        const {
          data: { message },
        } = response

        this.$refs.formRegister.reset()
        this.response.type = 'success'
        this.response.message = message
        setTimeout(() => {
          this.expandRegister = false
          this.expandLogin = true
          this.response = {}
          this.register = {}
        }, 1500)
      } catch (err) {
        console.log(err)
        const {
          data: { message },
        } = err.response
        this.response.type = 'error'
        this.response.message = message

        await this.$recaptcha.reset(this.widgetIdRegister)
      }
    },
  },
}
</script>

<style scoped>
.form--title {
  text-align: center;
  font-weight: normal;
  padding-top: 10px;
  color: rgba(0, 255, 255, 0.6);
}
</style>