import Dexie from "dexie";

const indexedDB = new Dexie("CRUD");

indexedDB.version(1).stores({
    users: "++id, first_name, last_name, email",
});

export default indexedDB;
