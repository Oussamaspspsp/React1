import '../style.css';

const FullName = () => {
    const firstName = 'Rick';
    const lastName = 'Astley';
  
    return (
      <div className='name'>
        <h1>{firstName} {lastName}</h1>
      </div>
    );
  };
  
  export default FullName;