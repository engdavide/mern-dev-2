import React, { useEffect } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const ShoppingList = (props) => {
	//this is the key declaration!!
	useEffect( () => {
		props.getItems()
	},[])
	const { items } = props.item

  
// 	props.getItems();
// 	const { items } = props.item;
	console.log(`items are: ${JSON.stringify(items)}`)
  
  return(
    <Container>


			<ListGroup>
				<TransitionGroup className="shopping-list">
					{items.map( ({ _id, name}) => (
						<CSSTransition key={_id} timeout={500} classNames="fade">
							<ListGroupItem>
								<Button
									className="remove-btn"
									color="danger"
									size="sm"
									onClick={() => {
										props.deleteItem(_id)
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

export default connect(mapStateToProps, 
		{ getItems, deleteItem })(ShoppingList);