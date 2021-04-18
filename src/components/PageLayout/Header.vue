<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>

        <li>
          <router-link to="/posts">
            Posts
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;

  list-style: none;
  padding: 0;
}

li {
  margin-right: 10px;
}
</style>
