'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import CartItem from './CartItem';
import { Button } from './ui/button';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Example eBook',
      description: 'A brief description of the eBook.',
      image: '/path/to/image.jpg',
      quantity: 1,
      price: 9.99,
    },
    {
      id: 2,
      title: 'Example eBook',
      description: 'A brief description of the eBook.',
      image: '/path/to/image.jpg',
      quantity: 1,
      price: 19.99,
    },
    // Add more items as needed
  ]);

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <ShoppingCart />
        </PopoverTrigger>
        <PopoverContent sideOffset={8} className='mr-10 w-full md:w-[340px]'>
          <div className='container mx-auto p-1'>
            <h1 className='text-2xl font-semibold mb-2'>Shopping Cart</h1>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={handleRemove}
                onUpdateQuantity={handleUpdateQuantity}
              />
            ))}
            <div className='flex mt-4 items-center justify-between'>
              <div>
                <Button>Go to Checkout</Button>
              </div>
              <div className='text-right text-lg font-semibold'>
                Total: $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </div>
            </div>
          </div>
        </PopoverContent>
        {/* <PopoverContent>Your cart is empty.</PopoverContent> */}
      </Popover>
    </div>
  );
};

export default Cart;
