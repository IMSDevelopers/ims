import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Add to cart notify
export const notify = () => toast.success('Item Added to cart.', {
    toastId: 'cartid123',
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

//Modals notify
export const deleteNotify = () => toast.error('Item Deleted.', {
        toastId: 'deleteid123',
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

export const editNotify = () => toast.info('Item Updated.', {
        toastId: 'editid123',
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

export const addNotify = () => toast.success('Item Added.', {
    toastId: 'addid123',
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

//Orders notify
export const deleteOrderNotify = () => toast.error('Order Deleted.', {
        toastId: 'orderdel123',
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

export const approveOrderNotify = () => toast.success('Order Approved.', {
            toastId: 'approvedOrder',
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

//Cart page notify

export const placeOrderNotify = () => toast.success('Order Placed.', {
    toastId: 'placeOrder',
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });