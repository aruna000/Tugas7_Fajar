<template>
  <div class="container">
    <h1>Todo List</h1>
    <form @submit.prevent="tambahTugas" class="input-field">
      <input
        v-model="tugasBaru"
        required
        placeholder="Tugas baru"
        class="input-text"
      />
      <button type="submit" class="todo-button">
        <i class="uil uil-notes note-icon"></i>
      </button>
    </form>

    <ul class="todoLists">
      <li v-for="tugas in tugasTerseleksi" :key="tugas.id" class="list">
        <input
          type="checkbox"
          v-model="tugas.selesai"
          @change="perbaruiTugas(tugas)"
        />
        <span :class="{ selesai: tugas.selesai }">{{ tugas.teks }}</span>
        <button @click="hapusTugas(tugas)" class="delete-button">
          <i class="uil uil-trash"></i>
        </button>
      </li>
    </ul>

    <div class="pending-tasks">
      <span>{{ tugasTersisa }} tugas tersisa</span>
      <button @click="hapusSemuaTugas" class="clear-button">Hapus Semua</button>
    </div>

    <button @click="toggleSembunyikanSelesai" class="toggle-completed">
      {{ sembunyikanSelesai ? "Tampilkan semua" : "Sembunyikan selesai" }}
    </button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useTodoStore } from "../stores/todoStore";

export default {
  setup() {
    const todoStore = useTodoStore();
    const tugasBaru = ref("");

    const tambahTugas = () => {
      if (tugasBaru.value.trim() !== "") {
        todoStore.tambahTugas(tugasBaru.value.trim());
        tugasBaru.value = "";
      }
    };

    const perbaruiTugas = (tugas) => {
      todoStore.perbaruiTugas(tugas);
    };

    const hapusTugas = (tugas) => {
      todoStore.hapusTugas(tugas);
    };

    const hapusSemuaTugas = () => {
      todoStore.hapusSemuaTugas();
    };

    const toggleSembunyikanSelesai = () => {
      todoStore.toggleSembunyikanSelesai();
    };

    const tugasTersisa = computed(() => todoStore.tugasTersisa);
    const tugasTerseleksi = computed(() => todoStore.tugasTerseleksi);
    const sembunyikanSelesai = computed(() => todoStore.sembunyikanSelesai);

    return {
      tugasBaru,
      tambahTugas,
      perbaruiTugas,
      hapusTugas,
      hapusSemuaTugas,
      toggleSembunyikanSelesai,
      tugasTersisa,
      tugasTerseleksi,
      sembunyikanSelesai,
    };
  },
};
</script>

<style scoped>
.container {
  position: relative;
  max-width: 480px;
  width: 100%;
  border-radius: 8px;
  padding: 25px;
  margin: 85px auto 0;
  background-color: rgba(255, 255, 255, 0.333);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #383737;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}

.input-field {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.input-text {
  background: #383737;
  flex-grow: 1;
  padding: 10px 15px;
  border: 0px solid #ffffff;
  border-radius: 4px;
  font-size: 16px;
  color: white;
}

.todo-button {
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

.note-icon {
  font-size: 24px;
  color: #143f8a;
}

.todoLists {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list {
  display: flex;
  align-items: center;
  background: #383737;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
}

.list input[type="checkbox"] {
  margin-right: 10px;
}

.list .selesai {
  text-decoration: line-through;
}

.delete-button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  color: #143f8a;
  font-size: 18px;
}

.pending-tasks {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.clear-button {
  background: #143f8a;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.clear-button:hover {
  background: #060d41;
}

.toggle-completed {
  background: none;
  border: none;
  color: #143f8a;
  cursor: pointer;
  margin-top: 20px;
}

.toggle-completed:hover {
  text-decoration: underline;
}
</style>
