import React from 'react';
import './Board.css';
import EventCard from './EventCard';

const events = [
  { title: 'Mediterranean Food Dishes', description: 'A variety of delicious Mediterranean food dishes.', link: 'https://www.google.com/search?q=mediterian+food+dishes&sca_esv=f0149a8253a94ec9&rlz=1C5CHFA_enUS967US967&udm=2&biw=1680&bih=928&sxsrf=AHTn8zrG9iRnA8Hg2paPvvq6sFv9KeUkwA%3A1740806943972&ei=H5vCZ-CAO9WQwbkPztjrqA4&ved=0ahUKEwigjJKck-iLAxVVSDABHU7sGuUQ4dUDCBE&uact=5&oq=mediterian+food+dishes&gs_lp=EgNpbWciFm1lZGl0ZXJpYW4gZm9vZCBkaXNoZXNI6BFQowlY8RBwAXgAkAEAmAE-oAHwAqoBATe4AQPIAQD4AQGYAgOgAnvCAgoQABiABBixAxgKwgIHEAAYgAQYCpgDAOIDBRIBMSBAiAYBkgcBM6AHuhM&sclient=img#vhid=28ksJDjKfWezQM&vssid=mosaic:~:text=Search%20inside%20image-,Mediterranean%20recipes%20%7C%20Good%20Food,-Visit', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiFN5Hspm3zE-rV_EWkvpunpEawOM-dfmqtA&s' },
  { title: 'Halloumi Vegetable Skewers', description: 'Delicious halloumi and vegetable skewers with pomegranate tahini sauce.', link: 'https://www.foodandwine.com/recipes/halloumi-vegetable-skewers-with-pomegranate-tahini-sauce', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/2196639_MEDIUM-5f8ef4f.jpeg' },
  { title: 'Best Mediterranean Recipes', description: 'Explore the best Mediterranean recipes.', link: 'https://downshiftology.com/best-mediterranean-recipes/', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyKgEAmLCydXLBv-Oy0ShL-wkYYrPJ3ZMOQ&s' },
  { title: 'Mediterranean Food Dishes', description: 'A variety of delicious Mediterranean food dishes.', link: 'https://www.google.com/search?q=mediterian+food+dishes&sca_esv=f0149a8253a94ec9&rlz=1C5CHFA_enUS967US967&udm=2&biw=1680&bih=928&sxsrf=AHTn8zrG9iRnA8Hg2paPvvq6sFv9KeUkwA%3A1740806943972&ei=H5vCZ-CAO9WQwbkPztjrqA4&ved=0ahUKEwigjJKck-iLAxVVSDABHU7sGuUQ4dUDCBE&uact=5&oq=mediterian+food+dishes&gs_lp=EgNpbWciFm1lZGl0ZXJpYW4gZm9vZCBkaXNoZXNI6BFQowlY8RBwAXgAkAEAmAE-oAHwAqoBATe4AQPIAQD4AQGYAgOgAnvCAgoQABiABBixAxgKwgIHEAAYgAQYCpgDAOIDBRIBMSBAiAYBkgcBM6AHuhM&sclient=img#vhid=Qy1gHxNZMhcDfM&vssid=mosaic:~:text=Search%20inside%20image-,36%20Mediterranean%20Recipes%20%7C%20olivemagazine,-Visit', image: 'https://www.themediterraneandish.com/wp-content/uploads/2020/05/mediterranean-diet-recipes-pinterest-1.jpg' },
  { title: 'Meze Mediterranean', description: 'A selection of Mediterranean appetizers.', link: 'https://www.foodandwine.com/appetizers/meze/mediterranean', image: 'https://www.foodandwine.com/thmb/g61WIUL3bqBvHF7ToHmEcWLGuq0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-seafood-and-chicken-paella-chorizo-hero-02-da067ee352434fb8887afa3971c7b18e.jpg' },
  { title: 'Plant-Based Mediterranean Diet', description: 'Healthy and delicious plant-based Mediterranean recipes.', link: 'https://theplantbasedschool.com/mediterranean-diet-recipes/', image: 'https://theplantbasedschool.com/wp-content/uploads/2023/11/Mediterranean-easy-recipes.jpg' },
  { title: 'Olive Magazine Mediterranean Recipes', description: 'Top Mediterranean recipes from Olive Magazine.', link: 'https://www.olivemagazine.com/recipes/collection/best-mediterranean-recipes/', image: 'https://images.immediate.co.uk/production/volatile/sites/2/2017/03/cod-tray.jpg?quality=90&webp=true&resize=600,545' },
  { title: 'BHG Mediterranean Diet Recipes', description: 'Healthy Mediterranean diet recipes from BHG.', link: 'https://www.bhg.com/recipes/healthy/healthy-mediterranean-diet-recipes/', image: 'https://www.bhg.com/thmb/FnNaK0-mylPhxEIe0MqQmtBKX4E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RU326628-6d4e050d99534fd2a41aa0ce87f2b2c4.jpg' },
  { title: 'Ultimate Mediterranean Bowl', description: 'The ultimate Mediterranean bowl with hummus, falafel, and more.', link: 'https://minimalistbaker.com/the-ultimate-mediterranean-bowl/', image: 'https://minimalistbaker.com/wp-content/uploads/2016/07/The-ULTIMATE-Mediterranean-Bowl-with-hummus-falafel-tahini-sauce-olives-and-pita-vegan-glutenfree-falafel-recipe-healthy-easy.jpg' },
  { title: 'Mediterranean Street Food', description: '7 Mediterranean street food recipes you must try.', link: 'https://www.mccormick.com/articles/mccormick/7-mediterranean-street-food-recipes-you-must-try', image: 'https://images-cdn.welcomesoftware.com/Zz04NjVlYzA2ZGQ0MzExMWViODc2MGQ5YzJhNjE5Y2Q0MQ==/Zz03ZTdmNDEzOWE4NTcxMWViYTg5Y2FmNjlmZTllMGFlNQ%3D%3D.jpg?width=1366' }
];

function Board() {
  return (
    <div className="board">
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
}

export default Board;