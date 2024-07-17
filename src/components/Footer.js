import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 p-6 mt-8">
    <div className="container mx-auto text-center">
        <div className="space-x-4 mb-4">
            <a href="#" className="text-gray-900 dark:text-gray-100 hover:underline">Privacy Policy</a>
            <a href="#" className="text-gray-900 dark:text-gray-100 hover:underline">Terms of Service</a>
            <a href="#" className="text-gray-900 dark:text-gray-100 hover:underline">Contact</a>
        </div>
        <div className="text-gray-700 dark:text-gray-300">
            © 2024 Your Company. All rights reserved.
        </div>
    </div>
</footer>
  );
};

export default Footer;
