import * as randomColor from 'randomcolor';
import * as moment from 'moment';

export class ContactModel {
    constructor(contact) {
        if (!contact) {
            return;
        }

        this.gender = contact.gender;
        this.firstname = contact.name.first.charAt(0).toUpperCase() + contact.name.first.slice(1);
        this.lastname = contact.name.last.charAt(0).toUpperCase() + contact.name.last.slice(1);
        this.name = this.firstname + ' ' + this.lastname;
        this.street = contact.location.street.charAt(0).toUpperCase() + contact.location.street.slice(1);
        this.city = contact.location.city.charAt(0).toUpperCase() + contact.location.city.slice(1);
        this.state = contact.location.state.charAt(0).toUpperCase() + contact.location.state.slice(1);
        this.postcode = contact.location.postcode;
        this.mapUrl = `https://maps.google.com/?q=${contact.location.coordinates.latitude},${contact.location.coordinates.longitude}`;
        this.email = contact.email;
        this.identifier = contact.login.uuid;
        this.phone = contact.phone;
        this.cell = contact.cell;
        this.picture = contact.picture.large;
        this.birthday = moment(contact.dob.date).format('MMMM D');
        this.daysUntilBirthday = moment(contact.dob.date).add(contact.dob.age + 1, 'years').fromNow();
        this.registered = moment(contact.registered.date).format('YYYY-MM-DD');
        this.color = randomColor({ seed: this.identifier });
    }
}