import React from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends React.Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    addContact = (name, number) => {
        const contact = {
            id: nanoid(),
            name,
            number,
        };

        if (this.state.contacts.some(item => item.name === contact.name)) {
            return alert(`${contact.name} is already in contacts`);
        } else {
            this.setState(prevState => {
                return {
                    contacts: [...prevState.contacts, contact],
                };
            });
        }
    };

    deleteContact = contactId => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(
                    item => item.id !== contactId
                ),
            };
        });
    };

    changeFilter = event => {
        this.setState({
            filter: event.target.value,
        });
    };

    getVisibleContacts = () => {
        return this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        );
    };

    render() {
        const vilibleContact = this.getVisibleContacts();

        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.addContact} />

                <h2>Contacts</h2>
                <Filter
                    filter={this.state.filter}
                    onChange={this.changeFilter}
                />
                <ContactList
                    vilibleContact={vilibleContact}
                    deleteContact={this.deleteContact}
                />
            </div>
        );
    }
}
