
import { LoaderFunction, MetaFunction, json } from '@remix-run/node';
import clsx from 'clsx'
import Product from '~/components/Product';
import { Tab } from '@headlessui/react'
import { getProducts } from 'data';
import { useLoaderData } from '@remix-run/react';
import { IProduct } from '~/types';

export const meta: MetaFunction = () => {
    return [
      { title: "Products | Remix App" },
      { name: "description", content: "Welcome to Remix!" },
    ];
  };
/**
 * Loader function that fetches products data asynchronously 
 * and returns a JSON response with the products.
 */
export const loader: LoaderFunction = async () => {
    const products = await getProducts()

    return json({ products })
}
const tabs = ['headphone', 'glass', 'hat' ]
/**
 * Renders the main app component.
 * 
 * Filters the products from the loader data by type into separate arrays.
 * Renders the filtered products in TabPanels for each product type.
 */
const App = () => {
    const { products } = useLoaderData<typeof loader>()

        /**
     * Filters the products array from the loader data into separate arrays by product type.
     * 
     * - headphones: Products with type "headphone"
     * - hats: Products with type "hat" 
     * - glasses: Products with type "glass"
     */
    const headphones = products.filter((product: IProduct) => product.type === 'headphone') as IProduct[]
    const hats = products.filter((product: IProduct) => product.type === 'hat') as IProduct[]
    const glasses = products.filter((product: IProduct) => product.type === 'glass') as IProduct[]

    return (
        <div className='flex items-center w-[100vw] min-h-[100vh] mt-5 lg:mt-10'>
            <div className='flex flex-col gap-5 items-center mx-auto uppercase max-w-[1000px] w-full'>
                <div className='font-bold text-2xl lg:text-4xl'>Shop & Earn Entries</div>
                <Tab.Group>
                    <Tab.List className='flex gap-2 lg:gap-5 max-w-[500px] w-full'>
                        {
                            tabs.map((tab, _index) => (
                                <Tab key={_index} className='focus:outline-none flex-1' >
                                    {({ selected }) => (

                                        <button
                                            className={clsx('font-bold uppercase w-full text-xl p-1 lg:p-3', { "border-b-4 border-b-black": selected })}
                                        >
                                            {tab}
                                        </button>
                                    )

                                    }
                                </Tab>
                            ))
                        }
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel className='grid grid-cols-12 gap-5'>
                            {
                                headphones.map(product => (
                                    <Product product={product} key={product.product_id} />
                                ))
                            }
                        </Tab.Panel>
                        <Tab.Panel className='grid grid-cols-12 gap-5'>
                            {
                                glasses.map(product => (
                                    <Product product={product} key={product.product_id} />
                                ))
                            }
                        </Tab.Panel>
                        <Tab.Panel className='grid grid-cols-12 gap-5'>
                            {
                                hats.map(product => (
                                    <Product product={product} key={product.product_id} />
                                ))
                            }
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}


export default App