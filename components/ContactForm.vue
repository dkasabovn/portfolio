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
.contact-form .form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
    border: none;
    border-bottom: solid 1px black;
    font-family: "Work Sans", sans-serif;
    padding: 10px 3px;
    outline: none;
    margin-bottom: 50px;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #db3056;
  color: white;
  cursor: pointer;
  border: none;
  width: 50%;
  text-align: center;
  font-family: 'Work Sans', sans-serif;
}
</style>