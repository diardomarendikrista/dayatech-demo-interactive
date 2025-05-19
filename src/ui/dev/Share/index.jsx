import Button from "components/Button";
import { useState, useRef } from "react";

export default function WebShareAPI() {
  const [media, setMedia] = useState({
    type: "video", // 'image' atau 'video'
    url: "/test.mp4", // URL placeholder untuk contoh
    title: "Konten untuk dibagikan",
  });

  const mediaRef = useRef(null);
  const [shareStatus, setShareStatus] = useState("");

  // Fungsi untuk share ke Instagram
  const shareToInstagram = async () => {
    // Cek apakah browser mendukung Web Share API
    if (navigator.share) {
      try {
        // Ambil gambar atau video sebagai blob
        const response = await fetch(media.url);
        const blob = await response.blob();

        // Buat File object dari blob
        const file = new File(
          [blob],
          `content-to-share.${media.type === "image" ? "jpg" : "mp4"}`,
          { type: media.type === "image" ? "image/jpeg" : "video/mp4" }
        );

        // Share menggunakan Web Share API
        await navigator.share({
          title: media.title,
          text: "Cek konten ini!",
          files: [file],
        });

        setShareStatus("Berhasil membuka dialog share!");
      } catch (error) {
        console.error("Error sharing:", error);

        // Fallback ke metode deep linking Instagram jika sharing file gagal
        // Catatan: Ini hanya bekerja jika Instagram diinstal pada perangkat
        try {
          // URL Instagram untuk Story
          const instagramURL = `instagram://story-camera`;
          window.location.href = instagramURL;
          setShareStatus("Membuka Instagram...");
        } catch (err) {
          setShareStatus("Gagal membuka Instagram: " + err.message);
        }
      }
    } else if (navigator.userAgent.includes("Instagram")) {
      // Jika dibuka di dalam Instagram WebView
      alert("Silakan gunakan tombol share di browser");
    } else {
      // Fallback jika Web Share API tidak didukung
      alert(
        "Browser anda tidak mendukung fitur share. Coba gunakan browser modern seperti Chrome atau Safari terbaru di perangkat mobile."
      );
      setShareStatus("Browser tidak mendukung Web Share API");
    }
  };

  // Toggle antara gambar dan video untuk keperluan demo
  const toggleMediaType = () => {
    setMedia((prev) => ({
      ...prev,
      type: prev.type === "image" ? "video" : "image",
      url: prev.type === "image" ? "/test.mp4" : "/psikolog.png", // URL placeholder untuk contoh
    }));
  };

  return (
    <div className="app-container flex flex-col gap-2">
      <h1 className="text-3xl font-bold">Share Media ke Instagram Story</h1>

      <div className="media-container">
        {media.type === "image" ? (
          <img
            ref={mediaRef}
            src={media.url}
            alt="Content to share"
            className="media-content"
            width={"200px"}
          />
        ) : (
          <video
            ref={mediaRef}
            src={media.url}
            controls
            className="media-content"
          />
        )}
      </div>

      <div className="controls">
        <Button onClick={toggleMediaType}>
          Ganti ke {media.type === "image" ? "Video" : "Gambar"}
        </Button>

        <Button onClick={shareToInstagram}>Share ke Instagram</Button>
      </div>

      {shareStatus && <p className="status-message">{shareStatus}</p>}

      <div className="info-box">
        <h3>Catatan Penting:</h3>
        <ul>
          <li>
            Fitur ini bekerja paling baik di perangkat mobile yang memiliki
            aplikasi Instagram
          </li>
          <li>Web Share API memerlukan koneksi HTTPS</li>
          <li>Pengguna tetap perlu menekan tombol "Post" di Instagram</li>
        </ul>
      </div>
    </div>
  );
}
