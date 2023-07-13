import { Injectable } from '@nestjs/common';
import * as  firebaseaccount from '../FirebaseAccount.json';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {

    firebaseApp: admin.app.App;
    constructor() {
        this.firebaseApp = admin.initializeApp({
            credential: admin.credential.cert(firebaseaccount as admin.ServiceAccount)
        });
    }

    async verifyToken(token: string): Promise<boolean> {
        try {
            this.firebaseApp.auth().verifyIdToken(token);
            return true;
        } catch (e) {
            return false;
        }

    }
}
