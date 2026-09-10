// Contoh file Footer.jsx / SocialMedia.jsx
export default function SocialFooter() {
  return (
    <div className="social-container">
      <h3>Ikuti Maonime di sosial media</h3>
      <div className="social-icons">
        {/* Ganti link di dalam href sesuai akun sosmed kamu */}
        <a href="https://tiktok.com/@username_kamu_baru" target="_blank" rel="noopener noreferrer">
          {/* Ikon TikTok */}
          <i className="fab fa-tiktok">TikTok</i>
        </a>
        <a href="https://instagram.com/username_kamu_baru" target="_blank" rel="noopener noreferrer">
          {/* Ikon Instagram */}
          <i className="fab fa-instagram">Instagram</i>
        </a>
        <a href="https://youtube.com/@channel_kamu" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube">YouTube</i>
        </a>
        <a href="https://facebook.com/akun_kamu" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook">Facebook</i>
        </a>
        <a href="https://discord.gg/link_server_kamu" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-discord">Discord</i>
        </a>
      </div>
    </div>
  );
}
