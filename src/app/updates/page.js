import Image from 'next/image';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { formatDateTime } from '../../../utils/helpers';

import queryAllBlogs from '../queryLib/queryAllBlogs';
import storeQuery from '../../../utils/storeQuery'
import Link from 'next/link';

import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';


async function page() {

    let data;
    let blogArr = [];

    async function BlogHtml({ html }) {
        if (typeof window !== 'undefined') {
            return (
                <div className = "blog-content">
                    {parse(DOMPurify.sanitize(html))}
                </div>
            )
        }

        return <p className="line-clamp-2 blog-content">{parse(html)}</p>
    }
    data = await storeQuery(queryAllBlogs);

    blogArr = data.blogs.edges[0].node.articles.edges;
    blogArr.reverse();

    return (
        <div id="updates" className="flex flex-col h-fit min-h-screen bg-gradient-to-b from-sky-700 from-20% via-[#43e2d8] via-75% to-[#cadba8] to-100%">
            <NavBar />
            <div className="flex flex-grow flex-col justify-around">
                {/* Header */}
                <h1 className="flex w-full justify-center font-mouse text-[#ffee00] text-7xl md:text-8xl lg:text-9xl pt-12 lg:pt-28 xl:pt-36">
                    UPDATES
                </h1>
                {/* Clouds and other background stuff */}
                <div className="absolute w-full px-1 pt-14 lg:px-8">
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
                    <div className="absolute lg:top-24 left-5 flex items-center justify-start">
                        <Image 
                            className="max-w-80 w-1/3 md:w-1/4 lg:w-full max-h-96 object-contain"
                            src="/cloud1.svg" 
                            alt="cloud"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="absolute -top-36 sm:-top-96 lg:-top-36 sm:-bottom-28 right-5 flex items-center justify-end">
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
                {/* Blogs */}
                <div className="flex justify-center h-full w-full font-baloo text-xl pb-6">
                    <div className="w-full lg:right-16 xl:right-30 mt-2 lg:mt-5 rounded-lg overflow-hidden z-40">
                        <div className="relative flex flex-wrap justify-center items-center flex-col">
                            {blogArr.map((blog, i) => {
                                return (
                                    <Link key={i} className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%]" href={`/updates/${blog.node.id.split("/").pop()}`}>
                                        <div
                                            className="flex w-full justify-center px-4"
                                        >
                                            {/* {blog.node.blog.handle === "cashews-corner" && ( */}
                                            <div className="w-full xl:w-[80%]">
                                                <div className="pb-0">
                                                    <h1 className={`flex w-full justify-left pl-3 text-gray-800 font-mouse py-2 text-2xl md:text-3xl lg:text-5xl border-x-2 border-t-2 border-black bg-[#dbfbff] rounded-t-xl`}>{blog.node.title}</h1>
                                                </div>
                                                <div className="flex flex-row w-full justify-center">
                                                    <div className={`flex flex-row min-h-[126px] justify-between items-center sm:items-start w-full text-black text-left text-base md:text-lg bg-[#f8f8f8] object-cover mb-4 border-x-2 border-t-gray-400 border-t border-black p-3 rounded-b-xl border-b-2`}>
                                                        <div className="flex flex-col justify-between w-full h-full">
                                                            <BlogHtml html={blog.node.content} />
                                                            <div>
                                                                <p className="text-xs text-gray-500">{formatDateTime(blog.node.publishedAt)}</p>
                                                            </div>
                                                        </div>
                                                        {blog.node.image && (
                                                            <div className="flex items-center h-full">
                                                                <div className="flex justify-end h-fit w-fit">
                                                                    <Image
                                                                        className="border rounded max-h-[75px] max-w-[75px] sm:max-h-[100px] sm:max-w-[100px] object-cover"
                                                                        src={blog.node.image.url}
                                                                        alt={blog.node.title}
                                                                        width={500}
                                                                        height={500}
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* )} */}
                                        </div>
                                    </Link>
                                )
                            })}
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