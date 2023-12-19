import React from 'react'
import './Header.css';
import Card from './Card';


function Body() {
    const laptopsData={
        "laptops": [
          {
            
            "name": "Dell XPS 13",
            "rating": 4.8,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1299.99
          },
          {
            "name": "HP Spectre x360",
            "rating": 4.5,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1399.99
          },
          {
            "name": "MacBook Air",
            "rating": 4.7,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 999.99
          },
          {
            "name": "Lenovo ThinkPad X1 Carbon",
            "rating": 4.6,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1499.99
          },
          {
            "name": "Asus ROG Zephyrus G14",
            "rating": 4.9,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1799.99
          },
          {
            "name": "Acer Swift 3",
            "rating": 4.2,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 799.99
          },
          {
            "name": "Microsoft Surface Laptop 4",
            "rating": 4.7,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1299.99
          },
          {
            "name": "LG Gram 17",
            "rating": 4.5,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1599.99
          },
          {
            "name": "Razer Blade 15",
            "rating": 4.8,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1999.99
          },
          {
            "name": "Samsung Galaxy Book Flex",
            "rating": 4.6,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1299.99
          },
          {
            "name": "Huawei MateBook X Pro",
            "rating": 4.4,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1499.99
          },
          {
            "name": "MSI GS66 Stealth",
            "rating": 4.7,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1799.99
          },
          {
            "name": "Dell Inspiron 14",
            "rating": 4.2,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 699.99
          },
          {
            "name": "Lenovo Legion 5",
            "rating": 4.6,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1299.99
          },
          {
            "name": "Acer Predator Helios 300",
            "rating": 4.8,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1299.99
          },
          {
            "name": "Asus ZenBook 14",
            "rating": 4.5,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1099.99
          },
          {
            "name": "HP Envy 13",
            "rating": 4.3,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1199.99
          },
          {
            "name": "Alienware m15 R4",
            "rating": 4.9,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 2499.99
          },
          {
            "name": "Microsoft Surface Pro 7",
            "rating": 4.6,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 899.99
          },
          {
            "name": "Google Pixelbook Go",
            "rating": 4.4,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 849.99
          },
          {
            "name": "Xiaomi Mi Notebook Pro",
            "rating": 4.5,
            "image": "https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg",
            "price": 1099.99
          }
        ]
      }

  return (
    <div >
      <h1>List of Laptops</h1>
      <ul className='cards' >
        {laptopsData?.laptops?.map(({name,rating,image,price}, index) => (
          <Card
          name={name}
          key={index}
          rating={rating}
          price={price}
          image={image}
          />
        ))}
      </ul>
    </div>
  )
}

export default Body
