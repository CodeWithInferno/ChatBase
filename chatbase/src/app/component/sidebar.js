import React from 'react';
import { useSession } from 'next-auth/react';
import { FaHome, FaCog, FaComment, FaTicketAlt, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    return (
        <div className="sidebar fixed top-0 left-0 h-full w-72 border-r border-slate-800">
            <div className="h-20 border-b border-slate-700">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <div className="flex items-center space-x-4">
                            <img className="w-14 h-14 ml-2 mt-2 rounded-full" src={session.user.image} alt="User profile" />
                            <div>
                                <p className="text-lg font-bold">{session.user.name}</p>
                                <p className="text-sm text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap">{session.user.email}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
                <div className="p-1 overflow-y-auto max-h-screen scrollbar-thin scrollbar-webkit">
                    <button className="w-full py-2 mb-2 bg-transparent hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaHome className="mr-2"/>Home</button>
                    <button className="w-full py-2 mb-2 bg-transparent mb-2 hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaCog className="mr-2"/>Settings</button>
                    <p className="text-slate-500 text-sm ml-2 mb-2">ACTIVITY</p>
                    <button className="w-full py-2 mb-2 mt-2 bg-transparent hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaComment className="mr-2"/>Chats</button>
                    <button className="w-full py-2 mb-2 bg-transparent hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaTicketAlt className="mr-2"/>Tickets</button>
                    <button className="w-full py-2 mb-2 bg-transparent hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaEnvelope className="mr-2"/>Emails</button>
                    <p className="text-slate-500 text-sm ml-2 mb-2">KNOWLEDGE BASE</p>
                    <button className="w-full py-2 mb-2 mt-2 bg-transparent hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaComment className="mr-2"/>Websites</button>
                    <button className="w-full py-2 mb-2 bg-transparent hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaTicketAlt className="mr-2"/>Videos</button>
                    <button className="w-full py-2 mb-2 bg-transparent hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaEnvelope className="mr-2"/>Documents</button>
                    <button className="w-full py-2 mb-2 bg-transparent hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaEnvelope className="mr-2"/>FAQs</button>
                    <p className="text-slate-500 text-sm ml-2 mb-2">ELEMENTS</p>
                    <button className="w-full py-2 mb-2 mt-2 bg-transparent hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaComment className="mr-2"/>ChatBots</button>
                    <button className="w-full py-2 mb-2 bg-transparent hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaTicketAlt className="mr-2"/>Tickets</button>
                    <button className="w-full py-2 mb-2 bg-transparent hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaEnvelope className="mr-2"/>Emails</button>
                    <p className="text-slate-500 text-sm ml-2 mb-2">CONNECTIONS</p>
                    <button className="w-full py-2 mb-2 mt-2 bg-transparent hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaComment className="mr-2"/>WebHooks</button>
                    <button className="w-full py-2 mb-2 bg-transparent hover:bg-gray-900 rounded-md pl-3 text-left flex items-center"><FaTicketAlt className="mr-2"/>Integrations</button>                </div>
        </div>
    );
};

export default Sidebar;