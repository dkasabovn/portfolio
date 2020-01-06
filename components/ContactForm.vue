<template>
  <div class="contact-form">
    <form class="form" action="https://formspree.io/meqejywb" method="POST">
      <input required name="name" v-model="name" placeholder="Name" type="text" autocomplete="off" />
      <input
        required
        name="_replyto"
        v-model="email"
        placeholder="E-mail"
        type="email"
        autocomplete="off"
      />
      <textarea name="message" v-model="message" rows="4" placeholder="Message"></textarea>
      <button class="button" type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  }
};
</script>

<style scoped>
.contact-form {
  font-family: 16px;
  padding: 40px;
  width: 30%;
  background-color: white;
  border-left: 6px solid black;
  position: relative;
  z-index: 2;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 20px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
    border: none;
    border-bottom: solid 1px red;
    font-family: "Roboto", sans-serif;
    padding: 10px 7px;
    margin-bottom: 15px;
    outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #000;
  color: white;
  cursor: pointer;
  border: none;
  padding: 10px 40px;
  text-align: center;
  text-transform: uppercase;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  font-size: 20px;
  font-family: "Work Sans", sans-serif;
}
</style>