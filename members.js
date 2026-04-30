// Init empty array in localStorage if it doesn't exist
if (!localStorage.getItem("tcMembers")) {
  localStorage.setItem("tcMembers", JSON.stringify([]));
}

// Fungsi untuk mengambil semua data anggota
function getMembers() {
  return JSON.parse(localStorage.getItem("tcMembers")) || [];
}

// Fungsi untuk menambah anggota baru
function addMember(anggota) {
  var data = getMembers();
  data.push(anggota);
  localStorage.setItem("tcMembers", JSON.stringify(data));
}
