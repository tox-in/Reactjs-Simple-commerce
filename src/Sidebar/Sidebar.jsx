import './Sidebar.css';
import Colors from './Colors/Colors';
import Category from './Category/Category';
import Price from './Price/Price';

function Sidebar({handleChange}) {
  console.log(handleChange);
  
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  )
}

export default Sidebar
