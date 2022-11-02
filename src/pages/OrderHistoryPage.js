import * as usersService from '../utilities/users-service';

const OrderHistoryPage = () => {

    const handleCheckToken = async () => {
       const expDate = await usersService.checkToken()
       console.log(expDate)
    }

    return(
        <div>
            <h1>OrderHistoryPage</h1>
            <button onClick={handleCheckToken}>Check When My login Expires</button>
        </div>
    )
}

export default OrderHistoryPage