// lib/firebaseService.ts
import { db } from "./firebase";
import { ref, push } from "firebase/database";

export interface EnquiryData {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  selectedItem?: string;
}

// Function to add enquiry to Firebase Realtime Database
export async function addEnquiry(data: EnquiryData) {
  try {
    const enquiriesRef = ref(db, "enquiries"); // your database node
    const newRef = await push(enquiriesRef, {
      ...data,
      timestamp: Date.now(),
    });
    return newRef.key; // returns the unique key of the new entry
  } catch (error) {
    console.error("Error adding enquiry:", error);
    throw error;
  }
}
