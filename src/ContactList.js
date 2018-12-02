import React, {
	Component
} from 'react'
import {
	Link
} from 'react-router-dom'

class ContactList extends Component {
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState(() => ({
			query: query.trim()
		}))
	}

	clearQuery = () => {
		this.updateQuery('')
	}

	render() {
		const showingContacts = this.state.query === '' ?
			this.props.contacts :
			this.props.contacts.filter((c) => (
				c.name.toLowerCase()
				.includes(this.state.query.toLowerCase())
			))

		return ( <
			div > <
			div className = 'list-contacts' >
			<
			div className = 'list-contacts-top' >
			<
			input className = 'search-contacts'
			type = 'text'
			placeholder = 'Search Contacts'
			value = {
				this.state.query
			}
			onChange = {
				(event) => this.updateQuery(event.target.value)
			}
			/ > <
			Link to = '/create'
			className = 'add-contact' > < /Link> < /
			div >

			{
				showingContacts.length !== this.props.contacts.length && ( <
					div className = 'showing-contacts' >
					<
					span > Now showing {
						showingContacts.length
					} of {
						this.props.contacts.length
					} < /span> <
					button onClick = {
						this.clearQuery
					} > Show all < /button> < /
					div >
				)
			}

			<
			/
			div > <
			ol className = 'list-contacts' > {
				showingContacts.map(contact => ( <
					li key = {
						contact.id
					}
					className = 'contact-list-item' >
					<
					div className = 'contact-avatar'
					style = {
						{
							'backgroundImage': `url(${contact.avatarURL || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'})`
						}
					} >
					<
					/div> <
					div className = 'contact-details' >
					<
					p > {
						contact.name
					} < /p> <
					p > {
						contact.handle
					} < /p> < /
					div >
					<
					button onClick = {
						() => this.props.onDeleteContact(contact)
					}
					className = 'contact-remove' > Remove < /button> < /
					li >
				))
			} <
			/ol> < /
			div >
		)
	}
}

export default ContactList