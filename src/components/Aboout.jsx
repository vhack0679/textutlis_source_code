import React, {useState} from 'react';

export default function about()
{
    return(
    <div>
    <div className="container" >
      <h1><u>About </u></h1>
      <br/>
      <p>
        Welcome to TextUtils - your ultimate text processing tool! Whether you're a writer, student, or anyone who deals with text regularly, TextUtils is here to make your life easier. Our web application provides a range of features to manipulate and enhance your text in various ways.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Convert text to uppercase or lowercase with just a click.</li>
        <li>Remove extra spaces to make your text cleaner and more readable.</li>
        <li>Count the number of sentences, words, and characters in your text.</li>
        <li>Calculate how long it might take to read your text in minutes and seconds.</li>
        <li>Copy your modified text to the clipboard for easy sharing.</li>
        <li>Capitalize the first letter of each word to enhance readability.</li>
      </ul>
      <h2>How to Use</h2>
      <p>
        Using TextUtils is simple. Just enter or paste your text into the provided textarea. You can then choose from various options to modify your text. Click the respective buttons to apply the chosen modifications. The output text will be displayed below the textarea, and you can also see a summary of the text's characteristics.
      </p>
      <h2>Who We Are</h2>
      <p>
        TextUtils was developed with the aim of providing a user-friendly and efficient text processing tool. Our team of developers is dedicated to creating tools that simplify everyday tasks. We understand the importance of clean and well-structured text, and that's why we created TextUtils to help you achieve just that.
      </p>
      <h2>Contact Us</h2>
      <p>
        Have questions, suggestions, or feedback? We'd love to hear from you! Feel free to reach out to us through our contact page or social media channels. Your input helps us make TextUtils even better for our users.
      </p>
 
    </div>
    </div>


    );
}