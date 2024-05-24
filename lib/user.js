import db from './db';

function createUser(email, password) {
    const result = db
        .prepare('INSERT INTO user (email, password) VALUES (?,?)')
        .run(
        email,
        password
    );

    return result.lastInsertRowid
}

export default createUser