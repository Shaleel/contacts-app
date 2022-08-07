import styled from 'styled-components';
import ContactListItem from './ContactListItem';
import CONTACTS from '../Contacts.json';

const Wrapper = styled.div`
    width: 30%;
    padding: 1rem;
    border-right: 3px solid lightgray;
    height: 90vh;
    @media only screen and (max-width: 720px) {
        border-right: none;
        flex: 1;
        padding: 0;
    }
    p {
        font-weight: 600;
        color: gray;
        margin-bottom: 1rem;
    }
    @media only screen and (max-width: 720px) {
        display: ${({ selectedContact }) =>
            selectedContact ? 'none' : 'block'};
    }
`;

function ContactList({ selectedContact, setselectedContact }) {
    return (
        <Wrapper selectedContact={selectedContact}>
            <p>List</p>
            {CONTACTS.map((contact, index) => {
                return (
                    <ContactListItem
                        key={index}
                        image={contact.image}
                        mobile={contact.mobile}
                        countryCode={contact.countryCode}
                        firstName={contact.firstname}
                        handleClick={() => setselectedContact(contact)}
                        selectedContact={selectedContact?.mobile}
                    />
                );
            })}
        </Wrapper>
    );
}

export default ContactList;
