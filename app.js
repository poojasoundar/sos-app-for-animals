const contacts = [
  { name: 'Contact 1', number: '555-1234' },
  { name: 'Contact 2', number: '555-5678' },
  { name: 'Contact 3', number: '555-9012' },
];

const form = document.getElementById('sos-form');
const message = document.getElementById('message');
const contactsList = document.getElementById('contacts');
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactNumber = document.getElementById('contact-number');

form.addEventListener('submit', event => {
  event.preventDefault();
  const messageContent = message.value;
  contacts.forEach(contact => {
    sendSOSMessage(contact.number, messageContent);
  });
});

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const contact = {
    name: contactName.value,
    number: contactNumber.value,
  };
  contacts.push(contact);
  addContactToList(contact);
  contactForm.reset();
});

function sendSOSMessage(contact, messageContent) {
  const message = `SOS Message: ${messageContent}`;
  const url = `sms://${contact}`;
  const openLink = window.open(url, '_system');
  if (openLink
