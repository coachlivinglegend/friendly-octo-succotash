import Image from 'next/image';

const CartItem = ({
  item,
  onRemove,
  onUpdateQuantity,
}: {
  item: any;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, value: number) => void;
}) => {
  return (
    <div className='flex items-center bg-white border-b border-gray-200 pb-3'>
      {/* <Image
        className='w-20 h-20 object-cover rounded'
        src={item.image}
        alt={item.title}
        height={16}
        width={16}
      /> */}
      <div className='flex-1'>
        <h3 className='text-lg font-semibold'>{item.title}</h3>
        <div className='flex items-center mt-2'>
          <button
            className='px-2 py-1 text-sm text-white bg-red-500 rounded'
            onClick={() => onRemove(item.id)}
          >
            Remove
          </button>
          <div className='flex items-center ml-4'>
            <button
              className='px-2 py-1 text-sm text-gray-700 bg-gray-200 rounded'
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span className='mx-2'>{item.quantity}</span>
            <button
              className='px-2 py-1 text-sm text-gray-700 bg-gray-200 rounded'
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className='ml-4 text-lg font-semibold'>${item.price}</div>
    </div>
  );
};
export default CartItem;
