import './Sidebar.css';
import Gender from './Gender/Gender';
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
        <Gender handleChange={handleChange} />
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  )
}

export default Sidebar
