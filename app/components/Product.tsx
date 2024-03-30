import { GoStar, GoStarFill } from "react-icons/go";
import { IProduct } from "~/types";

type ProductProps = {
    product: IProduct
}

const Product = ({ product }: ProductProps) => {
  return (
    <div className='col-span-12 md:col-span-6 lg:col-span-4 flex flex-col border rounded-lg shadow-md shadow-[#E5E7EB]'>
        <img src={`/images/${product.image}`} className='rounded-lg border w-[255px] h-[255px] object-cover' alt="" />
        <div className='flex flex-col gap-2 p-3 capitalize'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-1'>
                    {Array.from({ length:product.reviews.rating}).map((_, index) => <GoStarFill key={index} size={20}/>)}
                    {Array.from({ length:5 - product.reviews.rating}).map((_, index) => <GoStar key={index} size={20}/>)}
                </div>
                <div className='text-md font-semibold'>{product.reviews.count} Reviews</div>
            </div>
            <div className='text-sm font-semibold leading-5'>{product.name}</div>
            <div className='font-normal text-[#64748B] leading-4 text-xs'>{product.description}</div>
            <button className='bg-[#0F172A] rounded-lg py-3 text-white font-bold text-md'>Add to Cart - ${product.price}</button>

        </div>
    </div>
  )
}

export default Product;