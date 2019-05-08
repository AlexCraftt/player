<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Вход</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>

                <v-alert
                :value="error"
                type="warning">
                {{ error }}
                </v-alert>

                <v-form v-model="valid">
                  <v-text-field prepend-icon="email" name="login" label="Email" type="email" required v-model="email" :rules="emailRules"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" required v-model="password" :rules="passwordRules"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" round @click.prevent="signin" :disabled="processing || !valid">Войти</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
    data(){
        return{
            email: null,
            password: null,
            valid: false,
            emailRules: [
                (v) => !!v || 'Пожалуйста, введите e-mail',
                (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Неправильный email'
            ],
            passwordRules: [
                (v) => !!v || 'Пожалуйста, введите пароль',
                (v) => (v && v.length >= 6) || 'Пароль должен быть не менее 6 символов'
            ]
        }
    },

    computed:{
        error(){
            return this.$store.getters.getError
        },
        processing(){
            return this.$store.getters.getProcessing
        },
        isUserAuthentificated(){
            return this.$store.getters.isUserAuthentificated
        }
    },

    watch:{
        isUserAuthentificated(val){
            if(val === true){
                this.$router.push('/')
            }
        }
    },

    methods:{
        signin(){
            this.$store.dispatch('SIGNIN', {email:this.email, password:this.password})
        }
    }
}
</script>