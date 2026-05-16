import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const COLLECTION_NAME = 'contactMessages';

// Save a new contact message
export const addContactMessage = async (data) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...data,
      createdAt: serverTimestamp(),
      read: false
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding contact message: ", error);
    return { success: false, error: error.message };
  }
};

// Get all contact messages, sorted newest first
export const getContactMessages = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, messages };
  } catch (error) {
    console.error("Error getting contact messages: ", error);
    return { success: false, error: error.message };
  }
};

// Mark a message as read or unread
export const updateMessageReadStatus = async (id, isRead) => {
  try {
    const messageRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(messageRef, { read: isRead });
    return { success: true };
  } catch (error) {
    console.error("Error updating message read status: ", error);
    return { success: false, error: error.message };
  }
};

// Delete a message
export const deleteMessage = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    return { success: true };
  } catch (error) {
    console.error("Error deleting message: ", error);
    return { success: false, error: error.message };
  }
};
