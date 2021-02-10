import React, { useState, useEffect, useReducer } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v1 as uuid} from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

const ShoppingList = (props) => {
	const [items, setItems] = useState('')
	
	useEffect( () => {
		props.getItems();
	}, [])
  
// 	props.getItems();
// 	const { items } = props.item;
	console.log(`items are: ${props.items}`)
  
  return(
    <Container>
			<Button
        color="dark"
        style={{ marginBottom: '2rem' }}
        onClick={ () => {
          const name = prompt('Enter Item');
          if(name){
            //setItems([...props.items, { id: uuid(), name }])
          }
				}}
       >Add Item
		</Button>

			<ListGroup>
				<TransitionGroup className="shopping-list">
					{props.items.map( ({ id, name}) => (
						<CSSTransition key={id} timeout={500} classNames="fade">
							<ListGroupItem>
								<Button
									className="remove-btn"
									color="danger"
									size="sm"
									onClick={() => {
										//setItems(props.items.filter(item => item.id !== id))
									}}
								>&times;</Button>
								
								{name}
							</ListGroupItem>
						</CSSTransition>
					))}
				</TransitionGroup>
			</ListGroup>
    
    </Container>    
  )
  
}

ShoppingList.propTypes = {
	getItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	item: state.item
})

export default connect(mapStateToProps, { getItems })(ShoppingList);