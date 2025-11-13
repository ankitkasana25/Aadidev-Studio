"use client";

import React, { useState, useRef } from "react";
import { addEnquiry } from "@/lib/firebaseService";
import { X } from "lucide-react";

interface OfferFormModalProps {
  open: boolean;
  onClose: () => void;
  selectedItem?: string | null;
}

export default function OfferFormModal({
  open,
  onClose,
  selectedItem,
}: OfferFormModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const modalRef = useRef<HTMLDivElement>(null);

  if (!open) return null;

  // ✅ Close when clicking outside the modal
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleSubmit = async () => {
    if (!phone) {
      setStatus({ type: "error", message: "Please enter your phone number" });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      await addEnquiry({
        name,
        phone,
        email,
        message,
        selectedItem: selectedItem || undefined,
      });

      setStatus({
        type: "success",
        message: "Enquiry submitted successfully!",
      });

      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to submit enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const closeMessage = () => setStatus({ type: null, message: "" });

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/40 backdrop-blur-sm
        animate-[fadeInUp_0.3s_ease-out_forwards]
      "
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="
          relative bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-xl
          w-[90%] max-w-sm border border-primary/30
          flex flex-col justify-center items-center
        "
      >
        {/* ✅ Top-right close icon */}
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3 text-muted-foreground hover:text-primary
            transition-colors
          "
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <h3 className="text-lg font-semibold mb-3 text-primary text-center">
          Enquiry for: {selectedItem || "General"}
        </h3>

        {/* ✅ Success/Error Message */}
        {status.type && (
          <div
            className={`w-full p-2.5 mb-3 rounded-md flex items-center justify-between text-sm transition-all
              ${
                status.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
          >
            <span>{status.message}</span>
            <button onClick={closeMessage} className="ml-2">
              <X size={14} />
            </button>
          </div>
        )}

        <form className="space-y-3 w-full" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-xs text-foreground">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-2.5 rounded-md border border-primary/30 bg-white/70 outline-none focus:border-primary transition text-sm"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-xs text-foreground">Phone Number *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-1 p-2.5 rounded-md border border-primary/30 bg-white/70 outline-none focus:border-primary transition text-sm"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div>
            <label className="text-xs text-foreground">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2.5 rounded-md border border-primary/30 bg-white/70 outline-none focus:border-primary transition text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-xs text-foreground">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-1 p-2.5 rounded-md border border-primary/30 bg-white/70 outline-none focus:border-primary transition text-sm"
              rows={2}
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-primary text-primary-foreground py-2.5 rounded-md font-medium hover:bg-primary/90 transition text-sm"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-3 w-full text-center text-xs text-muted-foreground hover:text-primary transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
