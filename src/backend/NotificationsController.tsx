
import { firebase, } from '@react-native-firebase/firestore';
import { NOTIFICATIONS_STRING } from '../constants/firebaseConstants';

import { db, storage } from './firebaseConfig';

export const deleteNotification = async (documentReferencePath: string) => {
  try {
    await db.runTransaction(async (transaction) => {
      const documentReference =db.doc(documentReferencePath)
      const notificationDoc = await transaction.get(documentReference);
      if (!notificationDoc.exists) {
        throw "Document does not exist!";
      } else {
        transaction.delete(documentReference)
      }
    });
  } catch (e) {
  }
}
export const addNotification = async (documentReferencePath: string, data: any) => {
  try {
    await db.runTransaction( async (transaction) => {
      const documentReference =db.doc(documentReferencePath)
      const notificationReference =documentReference.collection(NOTIFICATIONS_STRING)
      transaction.set(notificationReference.doc(), data)
    });
  } catch (e) {
  }

}