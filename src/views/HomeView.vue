<template>
  <div class="container">
    <h1>Informasi Mahasiswa</h1>
    <div class="student-info">
      <div class="info-item">
        <span class="label">Nama:</span>
        <span class="value">{{ nama }}</span>
      </div>
      <div class="info-item">
        <span class="label">NPM:</span>
        <span class="value">{{ npm }}</span>
      </div>
      <div class="info-item">
        <span class="label">Kelas:</span>
        <span class="value">{{ kelas }}</span>
      </div>
      <div class="info-item">
        <span class="label">Mata Kuliah:</span>
        <span class="value">{{ matkul }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: "Fajar Muhairi",
      npm: "223510258",
      kelas: "4-D",
      matkul: "LAB PBK",
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

.student-info {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-item {
  display: flex;
  justify-content: space-between;
  background: #383737;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.label {
  font-weight: bold;
  color: white;
}

.value {
  color: white;
}
</style>
