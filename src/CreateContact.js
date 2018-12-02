import React, {
	Component
} from 'react'
import {
	Link
} from 'react-router-dom'
import serializeForm from 'form-serialize'
import ImageInput from './ImageInput'

class CreateContact extends Component {
	handleSubmit = (e) => {
		e.preventDefault();

		const values = serializeForm(e.target, {
			hash: true
		})
		values.email = `${values.handle}@contact.com`
		values.id = values.name

		if (this.props.onCreateContact) {
			this.props.onCreateContact(values)
		}
	}

	render() {
		return ( <
			div >
			<
			Link to = '/'
			className = 'close-create-contact' > Close < /Link> <
			form onSubmit = {
				this.handleSubmit
			}
			className = 'create-contact-form' >
			<
			ImageInput className = 'create-contact-avatar-input'
			name = 'avatarUrl'
			maxHeight = {
				64
			}
			/> <
			div className = 'create-contact-details' >
			<
			input type = 'text'
			name = 'name'
			placeholder = 'name' / >
			<
			input type = 'text'
			name = 'handle'
			placeholder = 'handle' / >
			<
			button > Add Contact < /button> < /
			div > < /
			form > < /
			div >
		)
	}
}

export default CreateContact