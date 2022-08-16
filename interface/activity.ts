interface activity {
    _index: String,
    _score:String,
    _source: {
        name: String,
        status: String,
        type: String,
        partner: {
            name: String,
            logicFlags: [],
            platform: String
        },
        country: String,
        categories: [],
        logicFlags: [],
        bookingMinimum: number,
        bookingPeriod: number,
        cancelationPeriod: number,
        city: String,
        description: String,
        location: {
            __type: String,
            latitude: number,
            longitude: number
        },
        participationModes: [],
        region: String,
        reservationEmail: String,
        reservationTypes: [],
        street: String,
        zipCode: number,
        createdAt: Date,
        updatedAt: Date,
        ACL: { },
        id: String,
        activityDate: {
            objectId: String,
            status: String,
            activity: {
                __type: String,
                className: String,
                objectId: String
            },
            start: { __type: Date, iso:Date },
            end: { __type: Date, iso:Date },
            startHours: number,
            endHours: number,
            dayOfWeek: number,
            region: String,
            repetition: String,
            minCapacity: number,
            createdAt: Date,
            updatedAt: Date,
            ACL: {},
            bookableUntil: Date,
            atMaxCapacity: boolean,
            videostreamUrl: String,
            videostreamDescription: String
        },
        geo: []
    },
    sort: []
}