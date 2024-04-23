const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPRITE_URL),
    appwiteProjectID: String(import.meta.env.VITE_APPRITE_PROJECT_ID),
    appwiteDatabaseID: String(import.meta.env.VITE_APPRITE_DATABASE_ID),
    appwiteCollectionID: String(import.meta.env.VITE_APPRITE_COLLECTION_ID),
    appwiteBucketID: String(import.meta.env.VITE_APPRITE_BUCKET_ID)
}

export default conf;