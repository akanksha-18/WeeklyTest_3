// import React, { useState } from 'react'

// export default function RemoveBackground() {
//     const [image, setImage] = useState(null);
//     const [bgRemove, setBgRemove] = useState(null);


//     const handleRemoveBackground = async () => {
//         const apiKey = "2V9p2CBn85EjvWpAVcdSQgRE"
//         const apiUrl = "https://api.remove.bg/v1.0/removebg"

//         const formData = new FormData();
//         formData.append("image_file", image, image.name);
//         formData.append("size", 'auto');

//         try {
//             const res = await fetch(apiUrl, {
//                 method: 'POST',
//                 headers: {
//                     'X-Api-Key': apiKey
//                 },
//                 body: formData
//             })

//             const data = await res.blob();

//             const reader = new FileReader();
//             reader.onloadend = () => setBgRemove(reader.result)
//             reader.readAsDataURL(data);
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     console.log(image)

//     return (
//         <div>
//             <div className='flex justify-center'>
//                 <div className="">
//                     {/* Input  */}
//                     <div className="input">
//                         {/* Input Tag  */}
//                         <div className="input border border-gray-700 px-2 py-2 rounded-lg bg-gray-950 mb-5">
//                             <input
//                                 type="file"
//                                 onChange={(e) => setImage(e.target.files[0])}
//                                 className="text-sm text-gray-500 file:mr-5 file:py-1 file:px-3  file:text-xs file:font-medium file:border-0 file:rounded-md file:bg-gray-800 file:text-gray-500 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700 lg:w-[40em]"
//                             />
//                         </div>

//                         {/* Remove Background Button  */}
//                         <div className="flex justify-center mb-5">
//                             <button
//                                 type="button"
//                                 onClick={handleRemoveBackground}
//                                 className="text-black bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium  rounded-lg text-sm px-5 py-2.5 text-center"
//                             >
//                                 Remove Background
//                             </button>
//                         </div>
//                     </div>

//                     {/* Output  */}
//                     <div className="flex gap-1 mb-5 ">
//                         {image && <div className="border-2 border-gray-500 rounded-l-lg border-dashed flex justify-center p-2 w-40 lg:w-80">
//                             <img className="w-90 h-90" src={image ? URL.createObjectURL(image) : ""} alt="" />
//                         </div>}

//                         {bgRemove && <div className="border-2 border-gray-500 rounded-r-lg border-dashed flex justify-center p-2 w-40 lg:w-80">
//                             <img className="w-90 h-90" src={bgRemove} alt="img" />
//                         </div>}
//                     </div>

//                     {bgRemove && <div className="flex justify-center">
//                         <a className='w-full' href={bgRemove} download={'save.png'}>
//                             <button className=' bg-gray-800 text-white w-full py-2 px-3 rounded-lg border border-gray-600'>Download</button>
//                         </a>
//                     </div>}

//                 </div>

//             </div>
//         </div>
//     )
// }

import React, { useState } from 'react';

export default function RemoveBackground() {
    const [image, setImage] = useState(null);
    const [bgRemove, setBgRemove] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRemoveBackground = async () => {
        const apiKey = "2V9p2CBn85EjvWpAVcdSQgRE";
        const apiUrl = "https://api.remove.bg/v1.0/removebg";

        const formData = new FormData();
        formData.append("image_file", image, image.name);
        formData.append("size", 'auto');

        setLoading(true);
        setError('');

        try {
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'X-Api-Key': apiKey
                },
                body: formData
            });

            if (!res.ok) {
                if (res.status === 429) {
                    throw new Error('API limit exceeded');
                } else {
                    throw new Error('Failed to remove background');
                }
            }

            const data = await res.blob();

            const reader = new FileReader();
            reader.onloadend = () => setBgRemove(reader.result);
            reader.readAsDataURL(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='flex justify-center'>
                <div className="">
                    <div className="input">
                        <div className="input border border-gray-700 px-2 py-2 rounded-lg bg-gray-950 mb-5">
                            <input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="text-sm text-gray-500 file:mr-5 file:py-1 file:px-3  file:text-xs file:font-medium file:border-0 file:rounded-md file:bg-gray-800 file:text-gray-500 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700 lg:w-[40em]"
                            />
                        </div>

                        <div className="flex justify-center mb-5">
                            <button
                                type="button"
                                onClick={handleRemoveBackground}
                                className="text-black bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                disabled={loading}
                            >
                                {loading ? 'Processing...' : 'Remove Background'}
                            </button>
                        </div>

                        {error && <div className="text-red-500 text-center mb-5">{error}</div>}
                    </div>

                    <div className="flex gap-1 mb-5">
                        {image && <div className="border-2 border-gray-500 rounded-l-lg border-dashed flex justify-center p-2 w-40 lg:w-80">
                            <img className="w-90 h-90" src={image ? URL.createObjectURL(image) : ""} alt="" />
                        </div>}

                        {bgRemove && <div className="border-2 border-gray-500 rounded-r-lg border-dashed flex justify-center p-2 w-40 lg:w-80">
                            <img className="w-90 h-90" src={bgRemove} alt="img" />
                        </div>}
                    </div>

                    {bgRemove && <div className="flex justify-center">
                        <a className='w-full' href={bgRemove} download={'save.png'}>
                            <button className=' bg-gray-800 text-white w-full py-2 px-3 rounded-lg border border-gray-600'>Download</button>
                        </a>
                    </div>}
                </div>
            </div>
        </div>
    );
}
