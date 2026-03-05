import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const errs: Record<string, string> = {};
        if (!form.name.trim()) errs.name = "El nombre es requerido";
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email inválido";
        if (!form.message.trim() || form.message.length < 20) errs.message = "El mensaje debe tener al menos 20 caracteres";
        return errs;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setStatus("sending");
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1800));
        setStatus("sent");
    };

    if (status === "sent") {
        return (
            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "0.75rem" }}>
                    ¡Mensaje enviado!
                </h3>
                <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>
                    Gracias por contactarme. Te responderé pronto.
                </p>
                <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    style={{
                        padding: "0.65rem 1.5rem",
                        borderRadius: "9999px",
                        background: "linear-gradient(135deg, #15803d, #22c55e)",
                        color: "white",
                        border: "none",
                        fontWeight: 600,
                        cursor: "pointer",
                        fontSize: "0.9rem",
                    }}
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    const fieldStyle = (name: string) => ({
        width: "100%",
        padding: "0.85rem 1rem",
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${errors[name] ? "#ef4444" : "rgba(34,197,94,0.2)"}`,
        borderRadius: "0.6rem",
        color: "#f1f5f9",
        fontFamily: "inherit",
        fontSize: "0.95rem",
        outline: "none",
        transition: "border-color 0.2s ease",
    });

    const labelStyle = {
        display: "block",
        fontSize: "0.82rem",
        fontWeight: 600,
        color: "#94a3b8",
        marginBottom: "0.4rem",
        fontFamily: "var(--font-mono, monospace)",
    };

    const errorStyle = {
        color: "#ef4444",
        fontSize: "0.75rem",
        marginTop: "0.25rem",
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }} noValidate>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                    <label style={labelStyle}>Nombre *</label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        style={fieldStyle("name")}
                        disabled={status === "sending"}
                    />
                    {errors.name && <p style={errorStyle}>{errors.name}</p>}
                </div>
                <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        style={fieldStyle("email")}
                        disabled={status === "sending"}
                    />
                    {errors.email && <p style={errorStyle}>{errors.email}</p>}
                </div>
            </div>

            <div>
                <label style={labelStyle}>Asunto</label>
                <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="¿De qué trata tu proyecto?"
                    style={fieldStyle("subject")}
                    disabled={status === "sending"}
                />
            </div>

            <div>
                <label style={labelStyle}>Mensaje *</label>
                <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    rows={5}
                    style={{ ...fieldStyle("message"), resize: "vertical" }}
                    disabled={status === "sending"}
                />
                {errors.message && <p style={errorStyle}>{errors.message}</p>}
            </div>

            <button
                id="contact-submit"
                type="submit"
                disabled={status === "sending"}
                style={{
                    padding: "0.85rem 2rem",
                    borderRadius: "9999px",
                    background: status === "sending" ? "rgba(21,128,61,0.5)" : "linear-gradient(135deg, #15803d, #22c55e)",
                    color: "white",
                    border: "none",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 20px rgba(21,128,61,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    width: "100%",
                }}
            >
                {status === "sending" ? (
                    <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}>
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Enviando...
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                        Enviar Mensaje
                    </>
                )}
            </button>

            <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        input:focus, textarea:focus { border-color: rgba(34,197,94,0.6) !important; }
      `}</style>
        </form>
    );
}
