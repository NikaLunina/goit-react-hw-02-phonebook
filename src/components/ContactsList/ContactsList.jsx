export const ContactsList = ({ contacts, onClickDelete }) => (
  <div>
    <ul>
      {contacts.map((contact, id) => (
        <li key={id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => onClickDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
