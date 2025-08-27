import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import Link from 'next/link';
import React from 'react';

const ProductHighlights = async () => {
    const productCollection = dbConnect(collectionNameObj.productsCollection);
    const data = await productCollection.find({}).toArray();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Featured Products
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Product Highlights
                </h2>
                
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Discover our curated selection of cutting-edge technology products designed to elevate your digital experience.
                </p>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group">
                            {/* Product Image */}
                            <div className="relative overflow-hidden">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                        {product.category}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                                        <span className="text-gray-600 text-xs font-medium">{product.brand}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {product.name}
                                </h3>
                                
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {product.description}
                                </p>

                                {/* Price and Button */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-bold text-gray-900">
                                            ${product.price.toLocaleString()}
                                        </span>
                                        <span className="text-gray-500 text-sm">Starting price</span>
                                    </div>
                                    
                                    <Link href={`/products/${product._id}`}><button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group">
                                        <span>View Details</span>
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button></Link>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="max-w-4xl mx-auto text-center mt-16">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Can't Find What You're Looking For?
                    </h3>
                    <p className="text-blue-100 mb-6 text-lg">
                        Explore our complete catalog with hundreds more premium tech products
                    </p>
                    <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                        <span>Browse All Products</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductHighlights;