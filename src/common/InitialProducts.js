import Shoes from "../assests/images/shoes-1.jpeg";
import Crocs from "../assests/images/shoes-2.jpeg";
import TShirt from "../assests/images/shirt-1.jpeg";
import Phone from "../assests/images/phone-1.jpeg";
import Kurta from "../assests/images/shirt-2.jpeg";
import Samsung from "../assests/images/phone-2.jpeg";

export default function InitialProducts() {
    return [
        {
            key: 1,
            name:'Shoes',
            price:2000,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Dolor sit amet consectetur adipiscing elit. Erat velit scelerisque in dictum non consectetur a.",
            photo: Shoes,
            category: 'FOOTWEAR',
            modifiedDate: new Date().toLocaleString(),
            quantity: 50,
            manufacturer: 'Reebok'
        },
        {
            key: 2,
            name:'T-Shirt',
            price:799,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Dolor sit amet consectetur adipiscing elit. Erat velit scelerisque in dictum non consectetur a.",
            photo: TShirt,
            category: 'CLOTHING',
            modifiedDate: new Date().toLocaleString(),
            quantity: 100,
            manufacturer: 'BIBA'
        },
        {
            key: 3,
            name:'I-Phone',
            price:70000,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Dolor sit amet consectetur adipiscing elit. Erat velit scelerisque in dictum non consectetur a.",
            photo: Phone,
            category: 'ELECTRONICS',
            modifiedDate: new Date().toLocaleString(),
            quantity: 500,
            manufacturer: 'APPLE'
        },
        {
            key: 4,
            name:'Kurta',
            price:1400,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Dolor sit amet consectetur adipiscing elit. Erat velit scelerisque in dictum non consectetur a.",
            photo: Kurta,
            category: 'CLOTHING',
            modifiedDate: new Date().toLocaleString(),
            quantity: 200,
            manufacturer: 'BIBA'
        },
        {
            key: 5,
            name:'CROCS',
            price:600,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Dolor sit amet consectetur adipiscing elit. Erat velit scelerisque in dictum non consectetur a.",
            photo: Crocs,
            category: 'FOOTWEAR',
            modifiedDate: new Date().toLocaleString(),
            quantity: 70,
            manufacturer: 'Reebok'
        },
        {
            key: 6,
            name:'SAMSUNG Galaxy',
            price: 80000,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Dolor sit amet consectetur adipiscing elit. Erat velit scelerisque in dictum non consectetur a.",
            photo: Samsung,
            category: 'ELECTRONICS',
            modifiedDate: new Date().toLocaleString(),
            quantity: 70,
            manufacturer: 'SAMSUNG'
        }
    ];
}