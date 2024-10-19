import qr from '../../assets/mailqr.jpg'

const Mail = () => {

    return (
        <div className='fixed bottom-4 right-4 p-4 cursor-pointer z-20'>
            <p className='text-white bg-white p-1 border rounded-lg'>
                <a href="mailto:charlotte.mandell@gmail.com">
                    <img src={qr} alt="" className='h-20'/>
                </a>
            </p>
        </div>
    )
}

export default Mail