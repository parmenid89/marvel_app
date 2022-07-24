import img from './error.gif'

const ErrorMessage = () => {
    return (
        <img style={{ display: 'block', width: 250, height: 250, objectFit: 'cover', margin: '0 auto' }} src={img} alt='error_img' /> 
    )
}

export default ErrorMessage;