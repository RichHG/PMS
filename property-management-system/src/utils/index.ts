export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};

export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const handleError = (error: Error): void => {
    console.error('An error occurred:', error.message);
};