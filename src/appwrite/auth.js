import { Client, Account, ID } from 'appwrite';
import conf from '../conf/conf'

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwiteProjectID);
        this.account = new Account(this.client);
    }


    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login();
            } else {
                return userAccount;
            }

        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(error);
        }
        return null;
    }
}


const authService = new AuthService();
export default authService;
