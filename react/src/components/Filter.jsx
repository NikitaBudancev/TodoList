import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useDispatch } from 'react-redux'
import { filterTodo } from '../redux/actions/filterAction'

const Filter = ({ items }) => {

  const {id, name, isActive} = items
  const dispatch = useDispatch()



  const selectActive = () => {
    dispatch(filterTodo(id))
  } 


 return (
   <li
     className={classnames({
    filter__item: true,
    filter__active: isActive
   })}
    
   >
     <a 
       onClick={selectActive}
       className="filter__item-link"
       href="/#"
     >
       {name}
     </a>
   </li> 
 )
}

export default Filter

Filter.defaultProps= {
  items: {},
}

Filter.propTypes = {
  items: PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  })
}