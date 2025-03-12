export interface UserType {
    id: string;
    username: string;
    password: string;
    email: string;
    role: 'admin' | 'user';
}

export interface ReservationType {
    id: string;
    userId: string;
    roomId: string;
    startDate: Date;
    endDate: Date;
    status: 'confirmed' | 'canceled' | 'pending';
}

export interface BookingType {
    id: string;
    reservationId: string;
    createdAt: Date;
    updatedAt: Date;
    totalAmount: number;
    paymentStatus: 'paid' | 'unpaid';
}