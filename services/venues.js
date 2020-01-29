import axios from 'axios';
import {fireDb} from '~/plugins/firebase.js'

class Venues {

    async getAll () {
        axios.get(`https://firestore.googleapis.com/v1/projects/tinder-197af/databases/(default)/documents/venues`)
        .then(response => { 
         console.log(response); 
        })
        .catch(error => { 
            console.log(error); 
        });
    }

    static buildVenues(item) {
        return new Venue({
            id: item.id,
            name: item.values[1],
            street: item.street[2],
            city: item.values[3],
            type: item.values[4],
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