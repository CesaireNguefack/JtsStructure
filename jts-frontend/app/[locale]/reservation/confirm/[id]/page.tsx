"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/componenten/Navbar";
import { confirmReservation } from "@/services/reservationApi";

export default function ConfirmReservationPage() {
  const params = useParams();
  const id = params.id as string;

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!id) return;

    const confirmReservation_ = async () => {
      try {
        const res = await confirmReservation(Number(id));

        if (res.status!== "success") {
          throw new Error("Fehler bei der Bestätigung" + res);
        }

        const data = await res;

        setStatus("success");
        setMessage(data.message || "Anfrage erfolgreich bestätigt!");
      } catch (error: any) {
        setStatus("error");
        setMessage(
          error.message || "Bei der Bestätigung ist ein Fehler aufgetreten."
        );
      }
    };

    confirmReservation_();
  }, [id]);

  return (
     <main className="bg-white">
                <Navbar navState="gradient" showLogo={true} />
                <section className="min-h-screen flex items-center justify-center">
      <div style={{ padding: "2rem", textAlign: "center" }}>
        {status === "loading" && <p>Bestätigung läuft...</p>}

        {status === "success" && (
          <div>
            <h1>✅  {message}</h1>
          </div>
        )}

        {status === "error" && (
          <div>
            <h1>❌ Fehler</h1>
            <p>{message}</p>
          </div>
        )}
      </div>
    </section>
    
    </main>
  );
}
