import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/db';
import Contact from '../../../models/Contact';

// POST
export async function POST(request) {
    await dbConnect();

    try {
        const formData = await request.json();

        // Basic sanitization function
        const sanitizeInput = (input) => {
            if (typeof input !== 'string') return input;
            return input.trim(); // Trim whitespace
            // For more robust sanitization against XSS, consider a library like 'dompurify'
            // For example: return DOMPurify.sanitize(input.trim());
        };

        // Sanitize form data
        const sanitizedData = {
            fullName: sanitizeInput(formData.fullName),
            email: sanitizeInput(formData.email),
            phone: sanitizeInput(formData.phone),
            ideaDescription: sanitizeInput(formData.ideaDescription),
        };

        const contact = await Contact.create(sanitizedData);
        return NextResponse.json({ message: 'Message received successfully!', data: contact }, { status: 201 });
    } catch (error) {
        console.error('Error processing form submission:', error);
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return NextResponse.json({ message: messages.join(', ') }, { status: 400 });
        }
        return NextResponse.json({ message: 'Error processing request.' }, { status: 500 });
    }
}



// // GET
// export async function GET(request) {
//     await dbConnect();

//     try {
//         const getData = await Contact.find({});
//         return NextResponse.json({ message: 'Message received successfully!', data: getData }, { status: 201 });
 
//     } catch (error) {
//         console.error('Error processing form submission:', error);
//         if (error.name === 'ValidationError') {
//             const messages = Object.values(error.errors).map(val => val.message);
//             return NextResponse.json({ message: messages.join(', ') }, { status: 400 });
//         }
//         return NextResponse.json({ message: 'Error processing request.' }, { status: 500 });
//     }
// }