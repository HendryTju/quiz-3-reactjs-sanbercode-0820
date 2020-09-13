import React from "react";

function ContactMe() {
  return (
    <div>
      <div style={{ padding: "10px", border: "1px solid #ccc" }}>
        <h1 style={{ textAlign: "center" }}>Hubungi Kami</h1>
        <strong>Kantor :</strong>
        di jalan belum jadi
        <br />
        <strong>Nomor Telepon :</strong>
        08XX-XXXX-XXXX
        <br />
        <strong>Email :</strong>
        email@contoh.com
        <h1 style={{ textAlign: "center" }}>Kirimkan Pesan</h1>
        <div>
          <div style={{ display: "block", marginBottom: "1em" }}>
            <div
              style={{
                display: "inline-block",
                width: "150px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Nama
            </div>
            <input
              style={{ display: "inline-block" }}
              type="text"
              name="name"
            />
          </div>
          <div style={{ display: "block", marginBottom: "1em" }}>
            <div
              style={{
                display: "inline-block",
                width: "150px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Email
            </div>
            <input
              style={{ display: "inline-block" }}
              type="text"
              name="name"
            />
          </div>
          <div style={{ display: "block", marginBottom: "1em" }}>
            <div
              style={{
                display: "inline-block",
                width: "150px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Jenis Kelamin
            </div>
            <div style={{ display: "inline-block" }}>
              <input type="radio" id="male" name="gender" defaultValue="male" />
              <label htmlFor="male">Laki-laki</label>
              <br />
              <input
                type="radio"
                id="female"
                name="gender"
                defaultValue="female"
              />
              <label htmlFor="female">Perempuan</label>
              <br />
            </div>
          </div>
          <div style={{ display: "block", marginBottom: "1em" }}>
            <div
              style={{
                display: "inline-block",
                width: "150px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Pesan Anda
            </div>
            <textarea cols={50} rows={5} defaultValue={""} />
          </div>
          <button>
            <a
              href="index.html"
              style={{ textDecoration: "none", color: "black" }}
            >
              Kirim
            </a>
          </button>
        </div>
      </div>
      <br />
      <br />
      <a href="index.html">
        <button>kembali ke index</button>
      </a>
    </div>
  );
}

export default ContactMe;
