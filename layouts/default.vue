<template>
  <div class="mt-5">
    <div class="cursor-hover" ref="cursor" id="c"></div>
    <div id="c-outside" ref="cursorOut"></div>
      <div class="d-none d-lg-block sidebar">
        <div id="nav-main">Daniel <br>Kasabov<span style="color: #db3056">-</span>Nouvion</div>
        <div>
          <ul class="no-list nav-list-main">
            <li class="ghost-arrow">
              <nuxt-link :to="'/list'" tag="span">Projects</nuxt-link>
            </li>
            <li class="ghost-arrow">
              <nuxt-link :to="'#'" tag="span">Photos</nuxt-link>
            </li>
            <li class="ghost-arrow">
              <nuxt-link :to="'#'" tag="span">Resume (JSON)</nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <ul class="no-list nav-list-secondary">
            <li class="red-link">
              <nuxt-link :to="'about'" tag="span">About</nuxt-link>
            </li>
            <li class="red-link">
              <nuxt-link :to="'contact'" tag="span">Contact</nuxt-link>
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
import { TweenLite } from 'gsap'

export default {
  mounted() {
    if (!this.isMobile()) {
      this.start()
    }
  },
  methods: {
    moveCircle: function(e) {
      TweenLite.to(this.$refs.cursor, 0.2, {
        css: {
          left: e.pageX,
          top: e.pageY
        }
      })
    },
    moveBorder: function(e) {
      TweenLite.to(this.$refs.cursorOut, 0.7, {
        css: {
          left: e.pageX,
          top: e.pageY
        }
      })
    },
    start: function() {
      let _this = this
      this.round()
      document.addEventListener('mousemove', this.moveCircle)
      document.addEventListener('mousemove', this.moveBorder)
    },
    round: function() {
      TweenLite.to(this.$refs.cursor, 0.4, {
        css: {
          'border-radius': '200%'
        }
      })
    },
    isMobile: function() {
      if (process.client) {
        return window.innerWidth < 1224
      }
    }
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
#c {
  width: .3vw;
  height: .3vw;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-collapse: separate;
  mix-blend-mode: difference;
  z-index: 20;
  background-color: white;
}
#c-outside {
  width: 1.6vw;
  height: 1.6vw;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-collapse: separate;
  mix-blend-mode: difference;
  z-index: 20;
  border: 1px solid #ff6961;
  border-radius: 100%;
}
</style>
