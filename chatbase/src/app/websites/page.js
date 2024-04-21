'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Sidebar from '../component/sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const Home = () => {
    const [showInput, setShowInput] = useState(false);
    const [inputs, setInputs] = useState([{ value: null }]);
    const [crawledUrls, setCrawledUrls] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const { status } = useSession();

    useEffect(() => {
        const aidbaseScript = document.createElement('script');
        aidbaseScript.src = 'https://client.aidbase.ai/chat.ab.js';
        aidbaseScript.async = true;
        document.body.appendChild(aidbaseScript);

        window.AIDBASE_CHATBOT_ID = 'qrhX1h2WWbvLTj9IhG42g';

        return () => {
            document.body.removeChild(aidbaseScript);
        };
    }, []);

    const handleDoneClick = () => {
        if (inputs.some(input => input.value)) {  // check if at least one input field has a value
            axios.post('http://localhost:5000/start_crawl', { urls: inputs.map(input => input.value) })
            .then(response => {
                console.log(response.data);
                setCrawledUrls(Array.isArray(response.data) ? response.data : [response.data]);
            })
            .catch(error => console.error(error));
        } else {
            alert('Please input a link');  // show an error message if no input field has a value
        }
    };

    const handleAddClick = () => {
        setInputs([...inputs, { value: null }]);
    };

    const handleInputChange = (index, event) => {
        const values = [...inputs];
        values[index].value = event.target.value;
        setInputs(values);
    };

    if(status === 'unauthenticated') {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-950">
                <Link href="/signin" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Click here to sign in
                </Link>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-slate-900">
            <Sidebar />
            <div className="flex flex-col w-full ml-80 mt-16 border-b border-solid border-gray-800 mb-5">
                <h1 className='font-bold text-2xl mb-5'><FontAwesomeIcon icon={faGlobe} /> Websites</h1>
                <p>Add websites to your knowledge base. Our AI would automatically extract relevant information.</p>
                <button 
                    className="w-fit bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded mt-4"
                    onClick={() => setShowInput(!showInput)}
                >
                    + Add Websites
                </button>
                {showInput && inputs.map((input, index) => (
                    <div key={index} className="relative">
                        <input 
                            className="mt-4 appearance-none text-white border rounded w-96 py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline" 
                            type="text" 
                            placeholder="Enter website URL"
                            value={input.value || ''}
                            onChange={event => handleInputChange(index, event)}
                        />
                        {index === inputs.length - 1 && 
                            <FontAwesomeIcon 
                                icon={faPlus} 
                                className="absolute top-0 left-96 ml-6 mt-6 mr-3 cursor-pointer" 
                                onClick={handleAddClick}
                            />
                        }
                    </div>
                ))}
                <button 
                    className="w-fit bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded mt-4"
                    onClick={handleDoneClick}
                >
                    Done
                </button>
                <button 
                    className="w-fit bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? 'Show Crawled URLs' : 'Hide Crawled URLs'}
                </button>
                {!isCollapsed && (
                    <div className="border border-blue-500 rounded p-4 mt-4">
                        <h2 className="font-bold mb-2">Crawled URLs:</h2>
                        {crawledUrls.map((url, index) => (
                            <p key={index} className="text-blue-500 hover:text-blue-700">{url}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;