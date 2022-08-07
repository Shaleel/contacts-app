import styled from 'styled-components';
import SendIcon from '../assets/send.svg';
const Wrapper = styled.div`
    max-width: 50%;
    padding: 1rem;
    height: 90vh;
    position: relative;
    @media only screen and (max-width: 720px) {
        border-right: none;
        flex: 1;
        padding: 0;
        max-width: 100%;
        table {
            display: none;
        }
    }
    p {
        font-weight: 600;
        color: gray;
        margin-bottom: 1rem;
    }
`;
const BackBTN = styled.button`
    display: none;
    position: absolute;
    top: -0.5rem;
    right: 0.5rem;
    border: none;
    background: transparent;
    color: #4287f5;
    font-weight: bold;
    padding: 0.5rem;
    @media only screen and (max-width: 720px) {
        display: block;
    }
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(159, 159, 159, 0.25);
    padding: 1rem;
    display: flex;
    margin-bottom: 1rem;

    td {
        padding: 0.5rem;
    }

    @media only screen and (max-width: 720px) {
        td {
            padding: 0;
        }
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    img {
        border-radius: 50%;
        height: 5rem;
        width: 5rem;
        border: 3px solid gray;
        margin-right: 1rem;
    }
    h3 {
        font-weight: 600;
        font-size: 1.5rem;
    }
`;
const MobileInfo = styled.div`
    display: none;
    @media only screen and (max-width: 720px) {
        display: block;
    }
`;
const Muted = styled.span`
    font-weight: bold;
    color: gray;
    font-size: 0.9rem;
    padding: 0.5rem;
`;
const Value = styled.div`
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.5rem;
    word-wrap: break-word;
    @media only screen and (max-width: 720px) {
        margin-bottom: 1rem;
    }
`;
export const SendBTN = styled.button`
    background: #68c682;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    border: none;
    color: white;
    font-weight: 600;
    padding: 1rem;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        margin-right: 1rem;
        height: 24px;
        width: 24px;
    }
`;
function ContactInfo({
    selectedContact,
    setisSendClicked,
    setselectedContact
}) {
    return (
        <Wrapper>
            <p>Info</p>
            <BackBTN onClick={() => setselectedContact(null)}>
                {' '}
                {'<-'} Back to List
            </BackBTN>

            <Main>
                <Header>
                    <img
                        alt={selectedContact.firstname}
                        src={selectedContact.image}
                    />
                    <h3>
                        {`${selectedContact.firstname}  ${selectedContact.lastname}`}
                    </h3>
                </Header>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Muted>Phone No</Muted>
                            </td>

                            <td>
                                <Value>
                                    +{selectedContact.countryCode}{' '}
                                    {selectedContact.mobile}
                                </Value>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Muted>Profession</Muted>
                            </td>
                            <td>
                                <Value> {selectedContact.profession}</Value>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Muted>Address</Muted>
                            </td>
                            <td>
                                <Value> {selectedContact.address}</Value>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Muted>Email</Muted>
                            </td>
                            <td>
                                <Value> {selectedContact.email}</Value>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <MobileInfo>
                    <Muted>Phone No</Muted>
                    <Value>
                        +{selectedContact.countryCode} {selectedContact.mobile}
                    </Value>
                    <Muted>Profession</Muted>
                    <Value> {selectedContact.profession}</Value>
                    <Muted>Address</Muted>
                    <Value> {selectedContact.address}</Value>
                    <Muted>Email</Muted>
                    <Value> {selectedContact.email}</Value>
                </MobileInfo>
                <SendBTN onClick={setisSendClicked}>
                    <img alt="send" src={SendIcon} /> Send Message
                </SendBTN>
            </Main>
        </Wrapper>
    );
}

export default ContactInfo;
