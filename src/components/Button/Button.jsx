import React, { useState } from 'react';
import loremIpsumData from '../Data/loremIpsumData.json'; // Adjust the path as necessary

const LoremIpsumGenerator = () => {
  const [count, setCount] = useState(1);
  const [type, setType] = useState('paragraphs');
  const [output, setOutput] = useState('');

  const handleGenerate = () => {
    let generatedText = '';
    const loremIpsumText = loremIpsumData.loremIpsumText;

    if (type === 'paragraphs') {
      for (let i = 0; i < count; i++) {
        generatedText += `<p>${loremIpsumText.join(' ')}</p>`;
      }
    } else if (type === 'sentences') {
      for (let i = 0; i < count; i++) {
        generatedText += `${loremIpsumText[i % loremIpsumText.length]} `;
      }
    } else if (type === 'words') {
      const words = loremIpsumText.join(' ').split(' ');
      for (let i = 0; i < count; i++) {
        generatedText += `${words[i % words.length]} `;
      }
    }
    else{ 
    alert("select any of them!")
    }

    setOutput(generatedText);
  };

  return (
    <div className="container mx-auto w-1/2 my-8 p-4  max-w-2xl bg-sky-700 border rounded-lg">
      <h1 className="text-center mb-4 text-4xl text-white font-serif">Lorem Ipsum Generator</h1>
      <div className="flex flex-row space-x-2">
        <input
          className=" mt-8  text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto"
          type="number"
          id="count"
          name="count"
          min="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <select
          className="py-2 mt-8  px-1 border-2 border-custom-dwhite rounded-lg bg-red-500  text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto shadow-zinc-900 text-white text-2xl"
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="paragraphs">Paragraphs</option>
          <option value="sentences">Sentences</option>
          <option value="words">Words</option>
    
          
        </select>
        
        <button
  className="relative inline-flex items-center justify-center px-4 mt-8 py-2 overflow-hidden font-medium text-white text-2xl rounded-lg shadow-2xl group bg-custom-red border border-red-700"
  onClick={handleGenerate}
>
  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
  </span>
  <span className="relative">Generate!</span>
</button>

      </div>
     
      <div className="mt-6 text-white bg-gradient-to-r from-indigo-500  font-mono " dangerouslySetInnerHTML={{ __html: output }}></div>
    </div>
  );
};

export default LoremIpsumGenerator;
