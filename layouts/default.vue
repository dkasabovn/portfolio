<template>
  <div class="mt-lg-5 mt-2">
    <div class="d-lg-none">
      <b-navbar toggleable="sm" class="mb-3">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>Daniel K</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <nuxt-link class="sm-link" :to="'/'">Projects</nuxt-link>
            <nuxt-link class="sm-link" :to="'/products'">Services</nuxt-link>
            <nuxt-link class="sm-link" :to="'/about'">About</nuxt-link>
            <nuxt-link class="sm-link" :to="'/contact'">Contact</nuxt-link>
            <nuxt-link class="sm-link" :to="'/resume'">Resume</nuxt-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="d-none d-lg-block sidebar">
      <div id="nav-main">Daniel <br>Kasabov<span style="color: #db3056">-</span>Nouvion</div>
      <div>
        <ul class="no-list nav-list-main">
          <li class="ghost-arrow">
            <nuxt-link :to="'/'" tag="span">Projects</nuxt-link>
          </li>
          <li class="ghost-arrow">
            <nuxt-link :to="'/products'" tag="span">Services</nuxt-link>
          </li>
          <li class="ghost-arrow">
            <nuxt-link :to="'/resume'" tag="span">Resume</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <ul class="no-list nav-list-secondary">
          <li class="red-link">
            <nuxt-link :to="'/about'" tag="span">About</nuxt-link>
          </li>
          <li class="red-link">
            <nuxt-link :to="'/contact'" tag="span">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="container-fluid col-lg-9">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "dkasabovn"
    }
  },
  mounted() {
    this.$store.dispatch('refresh')
  }
}
</script>

<style>
* {
  padding: 0;
}
#nav-main {
  font-family: 'Playfair Display', serif;
  font-size: 35px;
  margin-bottom: 20px;
}
.no-list {
  list-style-type: none;
  padding: 0 0;
}
.nav-list-main {
  font-family: 'Work Sans', sans-serif;
  font-size: 20px;
}
.nav-list-secondary {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 17px;
}
.red-link {
  text-decoration: underline;
  color: #db3056;
  cursor: pointer;
}
.sidebar {
  padding-left: 3vw;
  padding-right: 0;
  position: sticky;
  top: 50px;
  position: fixed;
}
.ghost-arrow {
  cursor: pointer;
}
.ghost-arrow::after {
  content: '\0027f9';
  display: inline-block;
  padding-left: 10px;
  color: #db3056;
  opacity: 0;
  transition: ease-in-out .2s;
}
.ghost-arrow:hover::after {
  padding-left: 30px;
  opacity: 1;
}
.ghost-arrow:hover {
  text-decoration: underline;
}
.sm-link {
  padding: 3px 10px;
  color: rgb(91, 91, 91);
  text-decoration: underline;
}
</style>
