import React from 'react';
import styled from 'styled-components';
import UserIcon from '../assets/users.svg';
import MessageIcon from '../assets/message.svg';

const Wrapper = styled.div`
    flex: 0.15;
    background-color: white;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    position: sticky;
    top: 0;
    box-shadow: 2px 0px 7px -2px rgba(0, 0, 0, 0.22);
    @media only screen and (max-width: 720px) {
        h1 {
            display: none;
        }
        padding: 0.5rem;
        padding-top: 4rem;
    }
`;

const Item = styled.button`
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ title, menuState }) =>
        title === menuState ? '#dbceff' : 'white'};
    border: none;
    border-radius: 1rem;
    font-size: 1.3rem;
    cursor: pointer;
    width: 100%;
    margin-left: auto;
    transition: background 0.3s ease;
    img {
        margin-right: 1rem;
    }
    :hover {
        background: #dbceff;
    }

    @media only screen and (max-width: 720px) {
        span {
            display: none;
        }
        img {
            margin-right: 0;
        }
    }
`;

function Sidemenu({ menu, setmenu }) {
    return (
        <Wrapper>
            <Item
                onClick={() => menu !== 'contacts' && setmenu('contacts')}
                title="contacts"
                menuState={menu}
            >
                <img alt="contact-icon" src={UserIcon} />
                <span>Contacts</span>
            </Item>
            <Item
                onClick={() => menu !== 'messages' && setmenu('messages')}
                title="messages"
                menuState={menu}
            >
                <img alt="message-icon" src={MessageIcon} />
                <span>Messages</span>
            </Item>
        </Wrapper>
    );
}

export default Sidemenu;
