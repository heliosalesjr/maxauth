'use server';

import { hashUserPassword } from '@/lib/hash';
import { createUser } from '@/lib/user';

export async function signup(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    let errors = {};

    if (!email.includes('@')) {
        errors.email = 'Enter a valid email address.';
    }

    if (password.trim().length < 8) {
        errors.password = 'Enter a valid password, we need at least 8 characters.';
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors,
        }
    }
    const hashedPassword = hashUserPassword(password);

    createUser(email, password)

}