import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import UnderConstruction from '../under-construction';
import NotFound from '../not-found';
import { formatDateTime } from '../../../utils/helpers';

import queryPage from '../queryLib/queryPage';
import { storefront } from '../../../utils/index';
import Link from 'next/link';

import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';


async function page() {

    let data;

    async function BlogHtml({ html }) {
        if (typeof window !== 'undefined') {
            return (
                <div className = "blog-content">
                    {parse(DOMPurify.sanitize(html))}
                </div>
            )
        }

        return <div className="blog-content">{parse(html)}</div>
    }
    try {
        const response = await storefront(queryPage, { handle: "FAQ" });
        data = response.data;
  
        if (!data || !data.page) {
            console.error("Data or data.page is undefined. Check your query and API response.");
            return (
                <div>
                    <UnderConstruction />
                </div>
            );
        }
    } catch (error) {
        console.error("Error fetching products: ", error);
        return (
            <div>
                <NotFound />
            </div>
        );
    }

    return (
        <div id="updates" className="flex flex-col h-fit min-h-screen bg-gradient-to-b from-sky-700 from-20% via-[#43e2d8] via-75% to-[#cadba8] to-100%">
            <NavBar />
            <div className="flex flex-grow flex-col justify-around">
                {/* Clouds and other background stuff */}
                <div className="absolute h-full w-full px-1 pt-14 lg:px-8">
                    <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                    <div
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffffff] to-[#3c3c3c] opacity-40 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]"
                    />
                    </div>
                    <div className="absolute left-0 sm:left-5 flex items-center justify-start">
                        <Image 
                            className="max-w-80 w-1/3 md:w-1/4 lg:w-full max-h-96 object-contain"
                            src="/cloud1.svg" 
                            alt="cloud"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="absolute h-full top-96 right-0 sm:right-5 flex items-center justify-end">
                        <Image 
                            className="max-w-80 w-1/3 md:w-1/4 lg:w-full max-h-96 object-contain"
                            src="/cloud2.svg" 
                            alt="cloud"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    >
                    <div
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e17313] to-[#fde25c] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                    </div>
                </div>
                {/* FAQ */}
                <div className="flex justify-center h-full w-full font-serif text-xl pb-6 pt-12 lg:pt-28">
                    <div className="w-full lg:right-16 xl:right-30 mt-2 lg:mt-5 rounded-lg overflow-hidden z-40">
                        <div className="relative flex flex-wrap justify-center items-center flex-col">
                            <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%]">
                                <div
                                    className="flex w-full justify-center px-4"
                                >
                                    <div className="w-full xl:w-[80%]">
                                        <div className="pb-0">
                                            <h1 className={`flex w-full justify-left pl-3 sm:pl-6 text-gray-800 font-sans py-2 text-lg md:text-xl lg:text-2xl font-semibold border-x-2 border-black bg-[#dbfbff] border-t-2 rounded-t-xl`}>Policies</h1>
                                        </div>
                                        <div className="flex flex-row w-full justify-center">
                                            <div className={`flex flex-row min-h-[126px] justify-between items-center sm:items-start w-full text-black text-left text-base md:text-lg bg-[#f8f8f8] object-cover border-x-2 border-t-gray-400 border-t border-black p-3 rounded-b-xl border-b-2`}>
                                                <div className="flex flex-col justify-between sm:px-3 h-full overflow-auto">
                                                    <BlogHtml html={data.page.body} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-end w-full h-full">
                    <Footer />
                </div>
        </div>
      )
}

export default page