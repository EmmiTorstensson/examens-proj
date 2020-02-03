import { fireDb } from '~/plugins/firebase.js'

class Venues {

    async getAll () {
        let venuesRef = fireDb.collection('venues')
      
        var allVenuesSnapShot = await venuesRef.get();

        allVenuesSnapShot.doc.forEach(doc => {
            return doc.map(item => {
                    return Venues.buildVenues(item);
                })
        })
    }
    
    static buildVenues(doc) {
        return new Venue({
            id: doc.id,
            name: doc.name,
            street: doc.street,
            city: doc.city,
            type: doc.type,
        })
    }
}

export default new Venues;

class Venue {

    constructor ({id, name, street, city, type}) {
        this.id = id;
        this.name = name;
        this.street = street;
        this.city = city
        this.type = type
    }

}