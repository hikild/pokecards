<template>
  <div class="footer">
    <p>
      <span>Poke Cards</span>. Alguns direitos reservados.
    </p>
    <img src="@/assets/pikachu.svg" />
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0073de;
  align-self: flex-end;
  top: 75px;
}
.footer img {
  width: 100%;
  max-width: 35px;
}
.footer p {
  margin-top: 15px;
  margin-right: 10px;
  color: #ffffff;
}
.footer p span {
  font-weight: bold;
}
</style>