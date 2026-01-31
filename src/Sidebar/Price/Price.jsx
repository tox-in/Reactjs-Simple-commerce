import Input from '../../Components/Input'
import './Price.css'

const Price = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  )
}

export default Price
