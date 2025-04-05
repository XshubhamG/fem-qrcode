import "./style.css";
import qrCode from "/images/image-qr-code.png";

document.querySelector("#app").innerHTML = `
    <main class="card">
      <img src="${qrCode}" alt="QR code" class="img" />
      <div class="content">
        <h1 class="heading">Improve your front-end skills by building projects</h1>
        <p class="text">
          Scan the QR code to visit Frontend Mentor and take your coding skills to
          the next level
        </p>
      </div>
    </main>
`;
