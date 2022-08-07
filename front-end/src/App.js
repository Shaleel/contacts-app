import { useState } from 'react';
import styled from 'styled-components';
import Sidemenu from './Components/Sidemenu';
import ContactList from './Components/ContactList';
import ContactInfo from './Components/ContactInfo';
import ComposeMessage from './Components/ComposeMessage';
import MessageList from './Components/MessageList';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`;
const Main = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    h2 {
        padding: 0.5rem;
        text-transform: capitalize;
        border-bottom: 3px solid lightgray;
    }
`;
const MainContent = styled.div`
    padding-top: 1rem;
    display: flex;
    width: 100%;
`;
function App() {
    const [menu, setmenu] = useState('contacts');
    const [selectedContact, setselectedContact] = useState(null);
    const [isSendClicked, setisSendClicked] = useState(false);
    return (
        <Wrapper>
            <Sidemenu menu={menu} setmenu={setmenu} />
            <Main>
                <h2>{menu}</h2>
                <MainContent>
                    {menu === 'contacts' && (
                        <ContactList
                            selectedContact={selectedContact}
                            setselectedContact={setselectedContact}
                        />
                    )}
                    {menu === 'contacts' && selectedContact && (
                        <ContactInfo
                            setisSendClicked={setisSendClicked}
                            selectedContact={selectedContact}
                            setselectedContact={setselectedContact}
                        />
                    )}
                    {menu === 'messages' && <MessageList />}
                </MainContent>
                {menu === 'contacts' && (
                    <ComposeMessage
                        selectedContact={selectedContact}
                        isSendClicked={isSendClicked}
                        setisSendClicked={setisSendClicked}
                    />
                )}
            </Main>
        </Wrapper>
    );
}

export default App;
