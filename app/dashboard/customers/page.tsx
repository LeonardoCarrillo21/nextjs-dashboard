
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};


export default function Customers() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Customers</h1>
            <p>Manage your customers here. You can add, edit, or remove customer information as needed.</p>
        </div>
    );
}