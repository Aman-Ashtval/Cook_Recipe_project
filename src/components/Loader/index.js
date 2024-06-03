import { Circles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='col-12 mt-5'>
            <div className="d-flex justify-content-center p-5">
                <Circles height="30" width="30" color="blue" ariaLabel="loading"  />
            </div>
        </div>
    );
}

export default Loader 