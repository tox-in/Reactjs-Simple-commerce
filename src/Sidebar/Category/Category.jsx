import Input from '../../Components/Input'
import './Category.css'

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title category-title">Category</h2>

      <div>
        <label className='sidebar-label-container'>
          <input onChange={handleChange} type="radio" value="" name='test' />
          <span className="checkmark"></span>All
        </label>
      </div>
    </div>
  )
}

export default Category
