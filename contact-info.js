import { contacts } from 'wix-crm-frontend';

export async function insertContactEmail(newContactEmail) {
  const contactInfo = {
    "emails": [newContactEmail]
  };

  contacts.appendOrCreateContact(contactInfo)
    .then((resolvedContact) => {
      return resolvedContact;
    })
    .catch((error) => {
      console.error(error);
    });
}

