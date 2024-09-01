"use client"
import Image from 'next/image'
import ProductForm from './ProductForm'
import DOMPurify from 'dompurify'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import SwiperCore, { Navigation, Pagination } from 'swiper'
// import RecommendedList from './RecommendedList'

export default function ProductPageContent({ product }) {
console.log("product: ", product)
      function ProductDescription({ descriptionHtml }) {
        const cleanedHtml = DOMPurify.sanitize(descriptionHtml);
        return <div dangerouslySetInnerHTML={{ __html: cleanedHtml }}></div>
      }

  const images = []

  product.variants.edges.map((item) => {
    const product = item.node;
    images.push(
    //   <SwiperSlide key={`slide-${product.image.id}`}>
        <img 
            key={`image-${product.image.id}`} 
            src={product.image.transformedSrc} 
            layout="fill" 
            className="rounded-lg shadow-lg" 
        />
    //   </SwiperSlide>
    )
  })

//   SwiperCore.use([Navigation, Pagination])

  return (
    <div>
        <div className="container mx-auto p-6">
            <div className="flex flex-wrap -mx-4">
                {/* <!-- Product images --> */}
                {/* <div className="flex flex-col items-center justify-center w-11/12 max-w-6xl mx-auto space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8"> */}
                <div className="w-full md:w-1/2 px-4 mb-8">
                    {/* <div className="w-full max-w-md overflow-hidden bg-white border shadow-lg rounded-2xl md:w-1/2"> */}
                        {/* <div className="relative w-full h-96"> */}
                        <div className="w-full h-auto rounded-lg shadow-lg mb-4">
                            {/* <Swiper
                            style={{ '--swiper-navigation-color': '#000', '--swiper-pagination-color': '#000' }}
                            navigation
                            pagination={{ clickable: true }}
                            className="h-96 rounded-2xl"
                            loop="true"
                            > */}
                            {images}
                            {/* </Swiper> */}
                        </div>
                    {/* </div> */}
                </div>
                {/* <!-- Product description --> */}
                <div className="w-full md:w-1/2 px-4">
                    <ProductForm product={product} />
                    <ProductDescription descriptionHtml={product.descriptionHtml}/>
                </div>
            </div>
        </div>
      {/* <RecommendedList current={product.id} products={product.collections.edges[0].node.products.edges} /> */}
    </div>
  )
}