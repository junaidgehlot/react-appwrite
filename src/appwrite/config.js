import { Client, Databases, Storage, Query, ID } from 'appwrite';
import conf from '../conf/conf'

export class Service {
    client = new Client();
    databases;
    storage;
    bucket;
    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwiteProjectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwiteDatabaseID,
                conf.appwiteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log(error);
        }
        return false;
    }

    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {
            return await this.databases.updateDocument(
                conf.appwiteDatabaseID,
                conf.appwiteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log(error);
        }
        return false;
    }

    async deletePost(slug) {
        try {
            await this.databases.updateDocument(
                conf.appwiteDatabaseID,
                conf.appwiteCollectionID,
                slug
            );
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwiteDatabaseID,
                conf.appwiteCollectionID,
                slug
            );
        } catch (error) {
            console.log(error);
        }
        return false
    }

    async getPosts(queries = [Query.equal('status', "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwiteDatabaseID,
                conf.appwiteCollectionID,
                queries
            );
        } catch (error) {
            console.log(error);
        }
        return false;

    }

    //File upload Services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwiteBucketID,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log(error);

        }
        return false;
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwiteBucketID, fileId);
            return true;
        } catch (error) {
            console.log(error);
        }
        return false;
    }

    async getFilePreview(fileId) {
        try {
            return await this.bucket.getFilePreview(conf.appwiteBucketID, fileId);
        } catch (error) {
            console.log(error);
        }
        return false;
    }
}

const service = new Service();

export default service;