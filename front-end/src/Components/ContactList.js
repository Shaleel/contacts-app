import styled from 'styled-components';
import ContactListItem from './ContactListItem';

const CONTACTS = [
    {
        image: 'https://randomuser.me/api/portraits/men/57.jpg',
        firstname: 'Shaleel',
        lastname: 'Ahmed',
        mobile: 8860962227,
        countryCode: +91,
        profession: 'Architect',
        address: 'New Delhi,Delhi,110002',
        email: 'shaleelahmed3@gmail.com'
    },
    {
        image: 'https://randomuser.me/api/portraits/men/58.jpg',
        firstname: 'Shahzaib',
        lastname: 'Ahmed',
        mobile: 7210927863,
        countryCode: +91,
        profession: 'Engineer',
        address: 'New Delhi,Delhi,110002',
        email: 'shaleelahmed3@gmail.com'
    },
    {
        image: 'https://randomuser.me/api/portraits/men/59.jpg',
        firstname: 'Test',
        lastname: 'Ahmed',
        mobile: 9873696377,
        countryCode: +91,
        profession: 'Painter',
        address: 'New Delhi,Delhi,110002',
        email: 'shaleelahmed3@gmail.com'
    }
];
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
