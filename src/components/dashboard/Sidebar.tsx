import { SidebarProps } from '@/app/dashboard/types';
import { FileText, LayoutDashboard, MessageSquare } from 'lucide-react';
import React, { FC, ReactNode } from 'react';

// A single navigation item component
const NavItem: FC<{ 
    icon: ReactNode; 
    label: string; 
    view: string; 
    activeView: string;
    onClick: (view: string) => void;
}> = ({ icon, label, view, activeView, onClick }) => (
    <li
        className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all duration-200 ${
            activeView === view 
            ? 'bg-[#0AF5AD] text-black shadow-[0_0_10px_#0AF5AD]' 
            : 'text-gray-300 hover:bg-gray-800'
        }`}
        onClick={() => onClick(view)}
    >
        {icon}
        <span className="font-medium">{label}</span>
    </li>
);

function Sidebar({ activeView, setActiveView, isSidebarOpen, setSidebarOpen }: SidebarProps) {
    
    const handleNavItemClick = (view: string) => {
        setActiveView(view);
        if (window.innerWidth < 768) {
            setSidebarOpen(false);
        }
    };

    return (
        
        <aside 
            className={`fixed top-18 left-0 h-full bg-gray-950 border-r border-gray-800 z-40 transition-transform duration-300 ease-in-out ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 w-64`}
        >
            {/* <div className="flex items-center justify-center h-20 border-b border-gray-800">
                <h1 className="text-2xl font-bold text-white">V4<span className="text-[#0AF5AD]">Labs</span></h1>
            </div> */}
            <nav className="p-4">
                <ul className="space-y-2">
                    <NavItem 
                        icon={<LayoutDashboard />} 
                        label="Dashboard" 
                        view="dashboard" 
                        activeView={activeView}
                        onClick={handleNavItemClick}
                    />
                    <NavItem 
                        icon={<FileText />} 
                        label="Blogs" 
                        view="blogs" 
                        activeView={activeView}
                        onClick={handleNavItemClick}
                    />
                    <NavItem 
                        icon={<MessageSquare />} 
                        label="Testimonials" 
                        view="testimonials" 
                        activeView={activeView}
                        onClick={handleNavItemClick}
                    />
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;