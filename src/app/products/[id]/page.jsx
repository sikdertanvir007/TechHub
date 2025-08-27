import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react';



const productDetailsPage = async ({ params }) => {
  const p = await params;
  const productsCollection = dbConnect(collectionNameObj.productsCollection);
  const data = await productsCollection.findOne({ _id: new ObjectId(p.id) });

  // Handle case where product is not found
  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <a href="/" className="text-gray-500 hover:text-blue-600 transition-colors">Home</a>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <a href="/products" className="text-gray-500 hover:text-blue-600 transition-colors">Products</a>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">{data.category}</a>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium">{data.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Product Image */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 group">
              <img 
                src={data.image} 
                alt={data.name}
                className="w-full h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Image Gallery Thumbnails */}
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md border-2 border-blue-500 p-2 cursor-pointer">
                <img src={data.image} alt="thumbnail" className="w-full h-full object-cover rounded" />
              </div>
              <div className="w-20 h-20 bg-white rounded-lg shadow-md border-2 border-transparent hover:border-blue-300 p-2 cursor-pointer transition-colors">
                <img src={data.image} alt="thumbnail" className="w-full h-full object-cover rounded" />
              </div>
              <div className="w-20 h-20 bg-white rounded-lg shadow-md border-2 border-transparent hover:border-blue-300 p-2 cursor-pointer transition-colors">
                <img src={data.image} alt="thumbnail" className="w-full h-full object-cover rounded" />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category and Brand */}
            <div className="flex items-center gap-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {data.category}
              </span>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m0 0h2M9 7h6m-6 4h6m-6 4h6" />
                </svg>
                <span className="text-gray-700 font-medium">{data.brand}</span>
              </div>
            </div>

            {/* Product Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {data.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">4.8 (124 reviews)</span>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-gray-900">
                  ${data.price.toLocaleString()}
                </span>
                <span className="text-gray-500 line-through text-xl">${(data.price * 1.15).toFixed(0)}</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Save ${(data.price * 0.15).toFixed(0)}
                </span>
              </div>
              <p className="text-gray-600 mt-2">Free shipping • 30-day return policy</p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Description</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {data.description}
              </p>
            </div>

            {/* Interactive Elements */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetailsPage;