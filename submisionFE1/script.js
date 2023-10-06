const navbarItems = document.querySelectorAll(".navbar li");

navbarItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.1)";
  });

  item.addEventListener("mouseout", () => {
    item.style.transform = "scale(1)";
  });
});

// Fungsi untuk mengganti konten saat tautan navbar diklik
function changeContent(contentId) {
  // Semua artikel dihapus dari tampilan
  const articles = document.querySelectorAll("article");
  articles.forEach((article) => {
    article.classList.remove("active");
  });

  // Hanya artikel yang sesuai dengan contentId yang ditampilkan
  const selectedArticle = document.getElementById(contentId);
  selectedArticle.classList.add("active");
}

function changeContent(section) {
  // Semua artikel disembunyikan
  const articles = document.querySelectorAll("article");
  articles.forEach((article) => {
    article.classList.remove("active");
  });

  // Tampilkan artikel yang sesuai dengan bagian yang dipilih
  const selectedArticle = document.getElementById(section);
  selectedArticle.classList.add("active");

  // Jika yang dipilih adalah "Data Diri", ubah konten di "Data Diri"
  if (section === "data-diri") {
    const dataDiri = document.getElementById("data-diri");
    dataDiri.innerHTML = `
      <img src="vector3.jpg" alt="Foto Saya" />
      <h2>Data Diri</h2>
      <p>Nama: John Doe</p>
      <p>Umur: 30 tahun</p>
      <p>Pekerjaan: Pengembang Web</p>
      <p>Email: john.doe@email.com</p>
    `;
  }
}
