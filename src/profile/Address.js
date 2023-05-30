import '../style.css';

const Address = () => {
    const street = '123 Street';
    const city = 'Vice City';
    const state = 'Ohio';
    const zipCode = '12345';
  
    return (
      <div className='address'>
        <p>{street}</p>
        <p>{city}, {state}, {zipCode}</p>
      </div>
    );
  };
  
  export default Address;