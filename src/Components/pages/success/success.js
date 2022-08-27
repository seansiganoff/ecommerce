import './success.css';

const Success = ({setCart}) => {
  

  setCart([])
  return (
    <div className='success-container'>
        <div className='success-header-text'>TRANSACTION COMPLETE!</div>
        <h4>Thanks you for your purchase</h4>
    </div>
    
  )
}

export default Success