"use client";

import React from "react";

interface OfferFormModalProps {
  open: boolean;
  onClose: () => void;
  selectedItem: string | null;
}

export default function OfferFormModal({
  open,
  onClose,
  selectedItem,
}: OfferFormModalProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center
        animate-[fadeInUp_0.3s_ease-out_forwards]
      "
    >
      <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl w-[90%] max-w-md border border-primary/30">
        <h3 className="text-xl font-semibold mb-4 text-primary">
          Enquiry for: {selectedItem}
        </h3>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-foreground">Name</label>
            <input
              type="text"
              className="
                w-full mt-1 p-3 rounded-lg border border-primary/30 
                bg-white/70 outline-none focus:border-primary transition
              "
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-sm text-foreground">Phone Number</label>
            <input
              type="tel"
              className="
                w-full mt-1 p-3 rounded-lg border border-primary/30 
                bg-white/70 outline-none focus:border-primary transition
              "
              placeholder="Enter your mobile number"
            />
          </div>

          <div>
            <label className="text-sm text-foreground">Message</label>
            <textarea
              className="
                w-full mt-1 p-3 rounded-lg border border-primary/30 
                bg-white/70 outline-none focus:border-primary transition
              "
              rows={3}
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="button"
            className="
              w-full bg-primary text-primary-foreground p-3 rounded-lg 
              font-medium hover:bg-primary/90 transition
            "
          >
            Submit
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 w-full text-center text-sm text-muted-foreground hover:text-primary transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
