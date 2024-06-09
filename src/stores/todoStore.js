import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    tugas: [{ id: 1, teks: "Tugas 7 PBK", selesai: true }],
    sembunyikanSelesai: false,
  }),
  actions: {
    tambahTugas(teks) {
      const id = Date.now();
      const todoBaru = { id, teks, selesai: false };
      this.tugas.push(todoBaru);
    },
    hapusTugas(tugas) {
      this.tugas = this.tugas.filter((t) => t.id !== tugas.id);
    },
    perbaruiTugas(tugasDiperbarui) {
      const index = this.tugas.findIndex((t) => t.id === tugasDiperbarui.id);
      if (index !== -1) {
        this.tugas[index] = tugasDiperbarui;
      }
    },
    hapusSemuaTugas() {
      this.tugas = [];
    },
    toggleSembunyikanSelesai() {
      this.sembunyikanSelesai = !this.sembunyikanSelesai;
    },
  },
  getters: {
    tugasTersisa: (state) => {
      return state.tugas.filter((tugas) => !tugas.selesai).length;
    },
    tugasTerseleksi: (state) => {
      return state.sembunyikanSelesai
        ? state.tugas.filter((tugas) => !tugas.selesai)
        : state.tugas;
    },
  },
});
