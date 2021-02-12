import React, { useState, setState } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions'


const ItemModal = (props) => {
	
	const [modal, setModal] = useState(false);
	const [name, setName] = useState('');
	
	const toggle = () => setModal(!modal);
	
	const onChange = (e) => {
		setName({ [e.target.name]: e.target.value })
	};
	
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(`name is: ${JSON.stringify(name)}`)
		const newItem = {
			name: name.name
		}
		props.addItem(newItem)
		toggle()
	}
	
	return(
		<div>
			<Button
				color="dark"
				style={{marginBottom: '2rem'}}
				onClick={toggle}
			>Add Item
			</Button>

			<Modal
				isOpen={modal}
				toggle={toggle}
			>
				<ModalHeader toggle={toggle}>Add to Shopping List</ModalHeader>
				<ModalBody>
					<Form onSubmit={onSubmit}>
						<FormGroup>
							<Label for="item">Item</Label>
							<Input	
								type="text"
								name="name"
								placeholder="Add item here"
								onChange={onChange}
							/>
							<Button
								color="dark"
								style={{marginTop: '2rem'}}
								block
							>Add Item </Button>
						</FormGroup>
					</Form>
				</ModalBody>
			</Modal>

		</div>

	)
}
	
const mapStateToProps = state =>({
	item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal)