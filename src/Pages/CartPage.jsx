import React from 'react';
import { useCart } from '../context/Cart';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri'; // Import the remove icon

const CartPage = () => {
    const [auth] = useAuth();
    const [cart, setCart] = useCart();
    const navigate = useNavigate();

    // Function to handle quantity change
    const handleQuantityChange = (productId, quantity) => {
        const newQuantity = parseInt(quantity, 10);

        if (isNaN(newQuantity) || newQuantity < 1) {
            console.log(`Invalid quantity for product ${productId}: ${quantity}`);
            return; // Prevent invalid quantity
        }

        console.log(`Changing quantity for product ${productId} to ${newQuantity}`);

        setCart(prevCart => {
            const updatedCart = prevCart.map(product => 
                product._id === productId ? { ...product, quantity: newQuantity } : product
            );
            console.log('Updated cart:', updatedCart);
            return updatedCart;
        });
    };

    // Function to handle product removal
    const handleRemoveProduct = (productId) => {
        let myCart= [...cart];
        let index =myCart.findIndex((item) => item._id === productId);
        myCart.splice(index, 1);
        // setCart(prevCart => prevCart.filter(product => product._id !== productId));
        setCart(myCart);
        localStorage.setItem('cart', JSON.stringify(myCart));
        console.log(`Removed product ${productId}`);
    };

    // Calculate total price for each product
    const calculateTotal = (product) => {
        return product.price * (product.quantity || 1);
    };

    // Calculate grand total for all products in cart
    const calculateGrandTotal = () => {
        return cart.reduce((total, product) => total + calculateTotal(product), 0);
    };

    return (
        <div className='pt-[100px]'>
            <div className=" text-black h-[100px] w-[500px] rounded-[10px]">
                <h1 className='text-center text-[20px] pt-2 font-bold'>
                    {`Hello ${auth?.token && auth?.user?.name}`}
                </h1>
                <h4 className='text-center'>
                    {cart?.length
                        ? `You Have ${cart.length} items in your cart
                         ${auth?.token ? "" : "Please Login to Checkout"}`
                        : "Your Cart Is Empty"}
                </h4>
            </div>

            {cart.length > 0 && (
                <div className="flex flex-wrap ml-10 mt-5">
                    <div className="w-full md:w-3/4">
                        <table className="min-w-full bg-white border">
                            <thead>
                                <tr className="w-full bg-[#1a263a] text-white border-b">
                                    <th className="text-left p-3">Image</th>
                                    <th className="text-left p-3">Product Name</th>
                                    <th className="text-left p-3">Price</th>
                                    <th className="text-left p-3">Quantity</th>
                                    <th className="text-left p-3">Total</th>
                                    <th className="text-left p-3">Remove</th> {/* New column for Remove icon */}
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(product => (
                                    <tr key={product._id} className="border-b">
                                        <td className="p-3">
                                            <img
                                                src={product.image || product.productImage}
                                                alt={product.name}
                                                className="rounded h-[5rem] w-[5rem]"
                                            />
                                        </td>
                                        <td className="p-3">
                                            {product.name}
                                        </td>
                                        <td className="p-3">
                                            ${product.price}
                                        </td>
                                        <td className="p-3">
                                            <input
                                                type="number"
                                                value={product.quantity || 1}
                                                min="1"
                                                onChange={(e) => handleQuantityChange(product._id, e.target.value)}
                                                className="w-16 p-1 border rounded"
                                            />
                                        </td>
                                        <td className="p-3">
                                            ${calculateTotal(product)}
                                        </td>
                                        <td className="p-3">
                                            <RiDeleteBin6Line
                                                onClick={() => handleRemoveProduct(product._id)}
                                                className="text-red-500 hover:text-red-700 cursor-pointer"
                                                size={24} 
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full md:w-1/4 p-5 pt-1">
                        <div className="bg-gray-100 p-4 rounded">
                            <h2 className="text-lg font-bold mb-4">Checkout</h2>
                            <p className="text-right font-bold pr-[95px]">
                                Grand Total: ${calculateGrandTotal()}
                            </p>
                            <button
                                onClick={() => navigate('/checkout')}
                                className="mt-4 w-full bg-blue-950 text-white py-2 px-4 rounded"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;