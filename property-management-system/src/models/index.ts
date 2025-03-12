export class User {
    constructor(public id: number, public username: string, public password: string) {}

    static async findById(id: number): Promise<User | null> {
        // Logic to find a user by ID from the database
    }

    static async findByUsername(username: string): Promise<User | null> {
        // Logic to find a user by username from the database
    }
}

export class Reservation {
    constructor(public id: number, public userId: number, public startDate: Date, public endDate: Date) {}

    static async create(reservation: Reservation): Promise<Reservation> {
        // Logic to create a new reservation in the database
    }

    static async findByUserId(userId: number): Promise<Reservation[]> {
        // Logic to find reservations by user ID from the database
    }
}

export class Booking {
    constructor(public id: number, public reservationId: number, public status: string) {}

    static async updateStatus(bookingId: number, status: string): Promise<Booking> {
        // Logic to update the status of a booking in the database
    }

    static async findByReservationId(reservationId: number): Promise<Booking | null> {
        // Logic to find a booking by reservation ID from the database
    }
}