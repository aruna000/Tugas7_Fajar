<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
    />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Todos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 Fajar. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
:root {
  --color-text: #333;
  --color-border: #ddd;
  --section-gap: 2rem;
}

header {
  background-color: #f8f8f8;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: var(--color-text);
  padding: 0.5rem 1rem;
  transition: color 0.3s, background-color 0.3s;
}

nav a:hover {
  color: #007bff;
  background-color: #e9ecef;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #007bff;
}

footer {
  background-color: #e9ecef;
  color: var(--color-text);
  padding: 2px 0;
  text-align: center;
  margin-top: 1px;
  border-top: 1px solid var(--color-border);
  width: 100%;
  position: fixed;
  bottom: 0;
}

.footer-content {
  max-width: 480px;
  margin: 0 auto;
  padding: 1px;
}

.footer-content p {
  margin: 3px 0;
  font-size: 12px;
}

@media (min-width: 1024px) {
  header {
    padding: 1rem calc(var(--section-gap) / 2);
  }

  .wrapper {
    width: 80%;
    justify-content: space-between;
  }

  nav {
    justify-content: flex-end;
  }
}
</style>
