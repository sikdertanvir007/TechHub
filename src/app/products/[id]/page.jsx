import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react';

const productDetailsPage = async ({params}) => {
    const p = await params
    const productsCollection = dbConnect(collectionNameObj.productsCollection);
    const data = await productsCollection.findOne({_id : new ObjectId(p.id)})
    return (
        <div>
            <p></p>
        </div>
    );
};

export default productDetailsPage;