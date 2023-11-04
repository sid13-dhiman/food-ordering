import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    // Use the useParams hook to get the restaurantName from the URL
    const { restaurantName } = useParams();

    const categoryImages = {
        'Sarovar Portico': {
            Indian: 'https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            Chinese: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            Italian: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fHww',
            Beverages: 'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmV2ZXJhZ2VzfGVufDB8fDB8fHww',
        },
        'Radisson Blu': {
            Indian: 'https://plus.unsplash.com/premium_photo-1694699356040-2a14b00b67b8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            Chinese: 'https://images.unsplash.com/photo-1515022376298-7333f33e704b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D',
            Italian: 'https://images.unsplash.com/photo-1597131628347-c769fc631754?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fHww',
            Beverages: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJldmVyYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
        },
        'La Plage': {
            Indian: 'https://images.unsplash.com/photo-1601050690294-397f3c324515?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            Chinese: 'https://images.unsplash.com/photo-1614277786110-1a64e457c4c3?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNoaW5lc2UlMjBmb29kfGVufDB8fDB8fHww',
            Italian: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            Beverages: 'https://images.unsplash.com/photo-1579636601263-f97b5e8a57b4?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGJldmVyYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
        },
        'Sienna store and Cafe': {
            Indian: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            Chinese: 'https://images.unsplash.com/photo-1628591697740-4378f154b2ce?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNoaW5lc2UlMjBmb29kfGVufDB8fDB8fHww',
            Italian: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fHww',
            Beverages: 'https://images.unsplash.com/photo-1532269748385-a458d8ee473e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJldmVyYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
        },
        'Americano': {
            Indian: 'https://images.unsplash.com/photo-1631788012420-a0d6a3cfcdfb?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            Chinese: 'https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVtcGxpbmdzfGVufDB8fDB8fHww',
            Italian: 'https://plus.unsplash.com/premium_photo-1678897742200-85f052d33a71?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fHww',
            Beverages: 'https://images.unsplash.com/photo-1578687596223-2ede660f0836?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJldmVyYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
        },
        'Palms and Sand Beach': {
            Indian: 'https://images.unsplash.com/photo-1591031107640-45556bbac5f1?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxpbmRpYW4lMjBmb29kfGVufDB8fDB8fHww',
            Chinese: 'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNoaW5lc2UlMjBmb29kfGVufDB8fDB8fHww',
            Italian: 'https://images.unsplash.com/photo-1625467150224-673f708dd8e8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fHww',
            Beverages: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGJldmVyYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
        }
    };

    return (
        <div className="container">
            <h2>{restaurantName}</h2>
            <div className="row">
                {Object.entries(categoryImages[restaurantName]).map(([category, imageUrl], index) => (
                    <div key={index} className="col-sm-6 col-lg-4" style={{ marginTop: '15px' }}>
                        <div className="card">
                            <img src={imageUrl} alt={category} className="card-img-top" style={{ height: '225px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{category}</h5>
                                {/* Add any additional information for the category */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
