import axios from 'axios';

class Venues {

    async getAll () {
        let response = await axios.get('https://api.hubapi.com/hubdb/api/v2/tables/2031243/rows?portalId=496638');
        return response.data.objects.map(item => {
            return Venues.buildVenues(item);
        })
    }

}

export default new Venues;

class Venue {

    constructor ({id, name, adress, city, capacity, image, description, location, slug}) {
        this.id = id;
        this.name = name;
        this.adress = adress;
        this.city = city;
        this.capacity = capacity;
        this.image = image.url;
        this.description = description;
        this.location = location;
        this.slug = slug;
    }

}