import React, {
	Component
} from 'react'
import './App.css'
import ContactList from './ContactList'
import CreateContact from './CreateContact'
import * as ContactsApi from './utils/ContactsApi'
import {
	Route
} from 'react-router-dom'

class App extends Component {
	state = {
		contacts: []
	}

	componentDidMount() {
		ContactsApi.getAll()
			.then((contacts) => {
				this.setState(() => ({
					contacts
				}))
			})
	}

	removeContact = (contact) => {
		ContactsApi.remove(contact)
			.then((contact) => {
				this.setState(prevState => ({
					contacts: prevState.contacts.filter((c) => {
						return c.id !== contact.id
					})
				}))
			})
	}

	createContact = (contact) => {
		ContactsApi.create(contact)
			.then((contact) => {
				this.setState((prevState) => ({
					contacts: prevState.contacts.concat([contact])
				}))
			})
	}

	render() {
		return ( <
			div >
			<
			Route exact path = '/'
			render = {
				() => ( <
					div className = "App" >
					<
					ContactList contacts = {
						this.state.contacts
					}
					onDeleteContact = {
						this.removeContact
					}
					/ > < /
					div >
				)
			}
			/>

			<
			Route path = '/create'
			render = {
				({
					history
				}) => ( <
					CreateContact onCreateContact = {
						(contact) => {
							this.createContact(contact)
							history.push('/')
						}
					}
					/>
				)
			}
			/> < /
			div >
		)
	}
}

export default App