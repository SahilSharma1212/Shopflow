import React from 'react';
import { Truck, BarChart2, DollarSign, Users, ShoppingCart, TrendingUp, LucideIcon } from 'lucide-react';

// Custom component for Feature Card
const FeatureCard = ({ icon: Icon, title, description }:{icon:LucideIcon, title:string, description:string}) => (
    <div className="flex flex-col p-6 bg-black border border-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.01]">
        <div className="p-3 mb-4 inline-flex items-center justify-center rounded-full bg-white/10 text-white border border-gray-700">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

// Custom component for the complex Hero Mockup (Monochromatic Visual)
const HeroMockup = () => (
    <div className="w-full max-w-xl aspect-4/3 relative p-4 bg-gray-800/50 border border-gray-700 rounded-2xl shadow-2xl backdrop-blur-sm">
        
        {/* Reports Card (Top Left) */}
        <div className="absolute top-0 left-0 w-32 h-40 bg-black border border-gray-700 rounded-xl p-3 transform -translate-x-1/4 -translate-y-1/4 shadow-2xl z-10">
            <p className="text-xs text-gray-400 mb-2">Reports</p>
            <div className="space-y-1">
                <div className="h-4 bg-gray-700 rounded-full w-full">
                    <div className="h-4 bg-gray-300 rounded-full w-[90%] flex items-center justify-end">
                        <span className="text-[10px] text-black font-bold pr-1">90%</span>
                    </div>
                </div>
                <div className="h-4 bg-gray-700 rounded-full w-full">
                    <div className="h-4 bg-gray-400 rounded-full w-[75%] flex items-center justify-end">
                        <span className="text-[10px] text-black font-bold pr-1">75%</span>
                    </div>
                </div>
                <div className="h-4 bg-gray-700 rounded-full w-full">
                    <div className="h-4 bg-white rounded-full w-[60%] flex items-center justify-end">
                        <span className="text-[10px] text-black font-bold pr-1">60%</span>
                    </div>
                </div>
            </div>
            <p className="text-[10px] text-center mt-3 text-white font-semibold cursor-pointer hover:underline">View Full Report</p>
        </div>
        
        {/* Total Products/Users Card (Top Right) */}
        <div className="absolute top-8 right-0 w-40 p-4 bg-gray-800 border border-gray-700 rounded-xl transform translate-x-1/4 shadow-2xl z-10">
            <p className="text-sm text-gray-400">Total Units</p>
            <h4 className="text-3xl font-extrabold text-white mt-1">25,430</h4>
            <div className="flex items-center text-xs text-gray-400 mt-2">
                <TrendingUp className="w-4 h-4 mr-1 text-white" /> +12.5% vs last month
            </div>
        </div>
        
        {/* Main Chart Area */}
        <div className="absolute inset-0 m-6 bg-black border border-gray-700 rounded-lg p-4 flex flex-col justify-end">
            <h4 className="text-lg font-semibold text-white mb-2">Inventory Value Trend</h4>
            <div className="flex h-1/2 items-end">
                {/* Mock Bar Chart */}
                {[0.4, 0.6, 0.8, 0.5, 0.9, 0.7, 0.55, 0.85].map((height, index) => (
                    <div key={index} className="flex-1 px-2 h-full flex items-end">
                        <div 
                            className="w-full bg-gray-500 rounded-t-sm transition-all duration-700"
                            style={{ height: `${height * 90}%` }}
                        ></div>
                    </div>
                ))}
            </div>
            <p className="text-xs text-center text-gray-500 mt-2">Last 8 Quarters</p>
        </div>
        
        {/* Footer Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-black/70 border-t border-gray-700 rounded-b-2xl flex items-center justify-between px-4">
            <div className="w-20 h-2 bg-gray-700 rounded"></div>
            <div className="w-10 h-2 bg-white rounded"></div>
        </div>
    </div>
);


const LandingPage = () => {
    return (
        <div className="min-h-screen custom-scroll bg-black text-white font-sans antialiased">
            
            {/* Navigation Bar */}
            <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <span className="text-2xl font-extrabold tracking-tight text-white">ShopFLow</span>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            {['Features', 'Pricing', 'Customer Stories', 'More'].map(item => (
                                <a key={item} href={`/home${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition duration-200">
                                    {item}
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-400 hover:text-white transition duration-200 hidden sm:block">Log In</button>
                            <a href="/home" className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 shadow-lg">
                                Sign Up
                            </a>
                        </div>
                    </nav>
                </div>
            </header>

            <main>
                {/* 1. Hero Section */}
                <section id="hero" className="py-20 max-md:py-10 overflow-hidden bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                            
                            {/* Hero Text Content */}
                            <div className="lg:col-span-6 mb-16 lg:mb-0">
                                <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">Inventory & Warehouse Control</p>
                                <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tighter text-white">
                                    <span className="block">Inventory</span>
                                    <span className="block bg-clip-text text-transparent bg-linear-to-r from-gray-200 to-gray-500">Management</span>
                                    <span className="block">Software</span>
                                </h1>
                                
                                <p className="mt-6 text-xl text-gray-400 max-w-lg">
                                    Increase your sales and keep track of every unit with our powerful stock management, order fulfillment, and inventory control software.
                                </p>
                                
                                <div className="mt-10 flex space-x-4">
                                    <a href="/home" className="inline-flex items-center bg-white text-black text-lg font-bold px-8 py-3 rounded-xl transition duration-300 hover:scale-[1.02] shadow-white/20 shadow-xl">
                                        Start Tracking - It&apos;s Free 
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </a>
                                </div>
                            </div>

                            {/* Hero Dashboard Mockup */}
                            <div className="lg:col-span-6 relative flex justify-center items-center">
                                <HeroMockup />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Features Section */}
                <section id="features" className="py-20 md:py-32 bg-black border-t border-b border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                            Advanced Features Made Simple
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
                            From the warehouse floor to the final bill, Ventor provides the tools you need to stay scalable, organized, and profitable.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={BarChart2}
                                title="Dashboard & Analytics"
                                description="Get real-time performance metrics and actionable insights on your stock levels, sales velocity, and overall business health."
                            />
                            <FeatureCard
                                icon={Truck}
                                title="Inventory Management"
                                description="Automate stock tracking, manage multiple warehouses, and receive low-stock alerts. Full visibility into every item."
                            />
                            <FeatureCard
                                icon={ShoppingCart}
                                title="Store & Order Fulfillment"
                                description="Integrate with your e-commerce channels. Manage customer orders, picking, packing, and shipping processes seamlessly."
                            />
                            <FeatureCard
                                icon={DollarSign}
                                title="Billing & Invoicing"
                                description="Generate professional invoices, track payments, and manage credits. Keep your cash flow transparent and accounted for."
                            />
                            <FeatureCard
                                icon={Users}
                                title="Supplier & Vendor Relations"
                                description="Maintain a clean database of suppliers, manage purchase orders, and track supplier performance with ease."
                            />
                            <FeatureCard
                                icon={TrendingUp}
                                title="Expense Tracking"
                                description="Log and categorize all operational expenditures. Link expenses directly to projects or inventory lines for better cost analysis."
                            />
                        </div>
                    </div>
                </section>
                
                {/* 3. Call to Action (Simple, High-Contrast) */}
                <section className="py-20 bg-black">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center p-10 bg-black border border-gray-800 rounded-2xl">
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to Reclaim Control?</h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Join thousands of businesses that trust Ventor to streamline their operations. No credit card required.
                        </p>
                        <a href="/home" className="inline-flex items-center bg-white text-black text-xl font-bold px-10 py-4 rounded-xl transition duration-300 hover:scale-[1.05] shadow-white/30 shadow-2xl">
                            Get Started Now
                        </a>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-black border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex justify-between items-center text-gray-500 text-sm flex-col md:flex-row">
                        <span className="text-white text-lg font-semibold mb-4 md:mb-0">VENTOR</span>
                        <p>&copy; {new Date().getFullYear()} Ventor. All rights reserved.</p>
                        <div className="space-x-4">
                            <a href="/home" className="hover:text-white">Privacy</a>
                            <a href="/home" className="hover:text-white">Terms</a>
                            <a href="/home" className="hover:text-white">Support</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;