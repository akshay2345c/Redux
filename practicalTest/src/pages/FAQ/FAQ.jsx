import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import './FAQ.css';

const FAQ = () => {
  const faqItems = [
    {
      question: 'What is this dashboard?',
      answer: 'This Product Management Dashboard is a comprehensive tool designed to help you manage your product inventory efficiently. It provides features for viewing, adding, editing, and organizing products in a user-friendly interface.'
    },
    {
      question: 'How to add a product?',
      answer: 'To add a new product, navigate to the "Add Product" section from the sidebar. Fill in the required information including title, price, category, and description. Click the "Save" button to add the product to your inventory.'
    },
    {
      question: 'What is sorting?',
      answer: 'Sorting allows you to organize your products based on different criteria such as ID, title, price, or rating. You can select a sorting option from the "Sort By" dropdown in the dashboard to arrange products in ascending or descending order.'
    },
    {
      question: 'What is filtering?',
      answer: 'Filtering helps you narrow down your product list by specific categories. Use the "Category" filter dropdown to show only products from a selected category, making it easier to find and manage specific types of products.'
    },
    {
      question: 'How does the search function work?',
      answer: 'The search bar allows you to quickly find products by typing keywords. It searches through product titles, descriptions, and other relevant fields to help you locate specific items in your inventory.'
    },
    {
      question: 'What is Infinite Scroll Mode?',
      answer: 'Infinite Scroll Mode is a viewing option that automatically loads more products as you scroll down the page, eliminating the need for pagination. Toggle this feature on or off using the switch in the dashboard controls.'
    }
  ];

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">Find answers to common questions about using the Product Management Dashboard</p>
      </div>
      <div className="faq-content">
        <Accordion items={faqItems} />
      </div>
    </div>
  );
};

export default FAQ;

