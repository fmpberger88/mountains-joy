import { validateEmail } from './main.js';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mocking document.querySelector and global.alert
global.document.querySelector = vi.fn().mockImplementation(selector => {
    if (selector === '#email') {
        return { value: '' }; // Default value, can be overridden in each test case
    }
    return null; // Covers any other selector queries
});
global.alert = vi.fn();

describe('validateEmail()', () => {
    beforeEach(() => {
        // Set the document title before each test case
        document.title = "Example Page | Subtitle";

        // Reset the mocks before each test
        document.querySelector.mockClear();
        alert.mockClear();
    });

    it('should return true for valid email addresses', () => {
        const validEmails = ['user@example.com', 'user.name@example.com', 'user_name@example.co.uk', 'user-name@subdomain.example.com', 'user+tag@example.com'];
        validEmails.forEach(email => {
            document.querySelector.mockReturnValueOnce({ value: email });
            expect(validateEmail()).toBe(true);
            expect(alert).not.toHaveBeenCalled();
        });
    });

    it("should return false and alert for invalid email addresses", () => {
        // const invalidEmails = ['user@example.com.', 'user@example..com'];
        const invalidEmails = ['', '@example.com', 'user@.com', 'user@example', 'user@com.', 'user example.com', 'user@@example.com', 'user@exa_mple.com'];
        invalidEmails.forEach(email => {
            document.querySelector.mockReturnValueOnce({ value: email });
            expect(validateEmail()).toBe(false);
            //expect(alert).toHaveBeenCalledWith("Email is not valid");
        });
    });
});
