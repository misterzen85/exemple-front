<template>
  <div class="container">
    <div class="card card-container">
      <div class="text-center icon" style="margin-bottom: 30px">
        <img src="https://i.imgur.com/o2lJKHK.png" height="130px" />
      </div>
      <h1 class="text-center">Bienvenue</h1>
      <div v-if="error != null" class="animated pulse alert alert-danger" role="alert">
        <button type="button" class="close" @click.prevent="removeError" aria-label="Fermer">
          <span aria-hidden="true">&times;</span>
        </button>
        {{ error }}
      </div>
      <form class="form-signin" @submit.prevent="submit">
        <br>
        <input type="text" class="form-control" placeholder="Identifiant" v-model="username" required>
        <input type="password" class="form-control" placeholder="Mot de passe" v-model="password" required>
        <button class="btn btn-lg btn-outline-primary btn-block" type="submit">Connexion</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-login',

  data () {
    return {
      username: null,
      password: null,
      error: null
    }
  },

  methods: {
    submit () {
      this.error = null
      var credentials = { username: this.username, password: this.password }
      this.$store.dispatch('auth/login', { credentials }).then((resp) => {
        this.$router.push({ name: 'dashboard' })
      }, (err) => {
        this.onFailLogin(err)
      })
    },

    onFailLogin (err) {
      if (err.response.data.message === 'invalid_credentials') {
        this.error = 'Identifiant ou mot de passe incorrect'
      } else {
        this.error = err.response.data.message
      }
    },

    removeError () {
      this.error = null
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300);

body, html {
  height: 100%;
  background-repeat: no-repeat;
}

h1 {
  font-family: 'Source Sans Pro';
  font-weight: 300;
}

input {
  font-family: 'Source Sans Pro';
}

.card-container.card {
  max-width: 350px;
  padding: 40px 40px;
}

.card {
  background-color: white;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.form-signin #inputEmail,
.form-signin #inputPassword {
  direction: ltr;
  height: 44px;
  font-size: 16px;
  margin-bottom: 10px;
}

.form-signin input[type=email],
.form-signin input[type=password],
.form-signin input[type=text],
.form-signin button {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  z-index: 1;
  position: relative;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

</style>

<style scoped>
.icon {
  position: relative;
  overflow: hidden;
  color: #fff;
}
.icon:after {
  content: "";
  position: absolute;
  top: -110%;
  left: -210%;
  width: 200%;
  height: 200%;
  opacity: 0;
  transform: rotate(45deg);

  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.13) 77%,
    rgba(255, 255, 255, 0.8) 92%,
    rgba(255, 255, 255, 0.0) 100%
  );
}

.icon:after {
  opacity: 1;
  top: -30%;
  left: -30%;
  animation-duration: 4s;
  animation-name: shine;
  animation-iteration-count: infinite;
}

@keyframes shine {
  0% {
    left: -210%;
    top: -110%;
    opacity: 0;
  }

  50% {
    left: -30%;
    top: -30%;
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

</style>
