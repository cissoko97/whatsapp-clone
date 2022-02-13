import { name, image, lorem, random, time, date } from 'faker';
import { IContact } from '../models';


let CONTACTS: Array<IContact> = new Array();


for (let i = 1; i <= 25; i++) {
  const contact: IContact = {
    id: random.uuid(),
    name: name.firstName(),
    avatar: image.people(100 , 100),
    lastMail: lorem.sentence(),
    lastMailHourse: date.past()
  }

  CONTACTS.push(contact);
}

export { CONTACTS }
