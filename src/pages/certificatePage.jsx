// src/pages/CertificatePage.jsx
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export default function CertificatePage() {
  const { id } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const docRef = doc(db,"AISSMS_IOIT", "main", "Certificates_Verification", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCertificate(docSnap.data());
        } else {
          setCertificate(null);
        }
      } catch (error) {
        console.error("Error fetching certificate:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificate();
  }, [id]);

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "100px" }}>⏳ Loading...</div>;
  }

if (!certificate) {
  return (
    <div
      style={{
        backgroundColor: "#0F0F0F",
        color: "#FFFFFF",
        minHeight: "100vh",
        minWidth:"100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#1A1A1A",
          padding: "40px 60px",
          borderRadius: "12px",
          boxShadow: "0 0 25px rgba(255, 0, 0, 0.3)",
          textAlign: "center",
          maxWidth: "500px",
          border: "1px solid rgba(255,0,0,0.4)",
        }}
      >
        <div style={{ fontSize: "64px", marginBottom: "20px" }}>❌</div>
        <h2 style={{ fontSize: "28px", marginBottom: "10px", fontWeight: "600" }}>
          Certificate Not Verified
        </h2>
        <p style={{ fontSize: "16px", opacity: "0.8", marginBottom: "20px" }}>
          This certificate could not be verified by <strong>IOTive</strong>.  
          Please make sure the link is correct or contact the issuer.
        </p>
        <a
          href="/"
          style={{
            backgroundColor: "#FF0000",
            color: "#FFFFFF",
            padding: "10px 20px",
            margin: "20px 20px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "500",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#CC0000")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#FF0000")}
        >
          Go Back
        </a>
      </div>
    </div>
  );
}



  return (
        <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <img
            src="/IOTIVE_Logo.jpg" // Place your logo in public/
            alt="IOTIVE Logo"
            style={styles.logo}
          />
          <h1 style={styles.title}>Certificate Verification</h1>
          <p style={styles.subtitle}>Official verification powered by IOTIVE</p>
        </div>

        <div style={styles.details}>
          <div style={styles.row}>
            <span style={styles.label}>Name:</span>
            <span style={styles.value}>{certificate.name}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Email:</span>
            <span style={styles.value}>{certificate.email}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>College:</span>
            <span style={styles.value}>{certificate.college}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Department:</span>
            <span style={styles.value}>{certificate.department}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Workshop:</span>
            <span style={styles.value}>{certificate.workshop}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Date:</span>
            <span style={styles.value}>{certificate.date}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Certificate No:</span>
            <span style={styles.value}>{certificate.certificate_no}</span>
          </div>
        </div>

        <div style={styles.footer}>
          <span style={styles.badge}>✓ Verified</span>
          <p style={styles.footerText}>Issued and Verified by IOTIVE</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #2b5876, #4e4376)",
    minHeight: "100vh",
    minWidth:"100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    backdropFilter: "blur(20px)",
    background: "rgba(255, 255, 255, 0.12)",
    padding: "35px 30px",
    borderRadius: "16px",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    color: "white",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  logo: {
    height: "70px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
    margin: "0",
  },
  subtitle: {
    fontSize: "14px",
    color: "#d1d1d1",
    marginTop: "4px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "10px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    paddingBottom: "8px",
  },
  label: {
    fontWeight: "500",
    color: "#cfcfcf",
  },
  value: {
    fontWeight: "600",
    textAlign: "right",
  },
  footer: {
    textAlign: "center",
    marginTop: "25px",
  },
  badge: {
    background: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    borderRadius: "30px",
    fontWeight: "bold",
    display: "inline-block",
    fontSize: "16px",
  },
  footerText: {
    fontSize: "12px",
    color: "#b5b5b5",
    marginTop: "8px",
  },
  loading: {
    textAlign: "center",
    color: "#444",
    marginTop: "100px",
    fontSize: "18px",
  },
  notFound: {
    textAlign: "center",
    marginTop: "100px",
    color: "red",
    fontSize: "18px",
  },
};


const errorStyles = {
  container: {
    background: "linear-gradient(135deg, #f8f9fa, #e0e0e0)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    
  },
logo: {
    height: "70px",
    marginBottom: "10px",
  }}