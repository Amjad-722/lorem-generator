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
    <div className="container mx-auto my-8 p-4 w-full max-w-2xl bg-gray-200 border rounded-lg">
      <h1 className="text-center mb-4 text-xl font-bold">Lorem Ipsum Generator</h1>
      <div className="flex flex-row space-x-4">
        <input
          className="py-2 px-1 border-2 border-custom-dwhite rounded-lg bg-custom-white w-32"
          type="number"
          id="count"
          name="count"
          min="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <select
          className="py-2 px-1 border-2 border-custom-dwhite rounded-lg bg-custom-white"
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="paragraphs">Paragraphs</option>
          <option value="sentences">Sentences</option>
          <option value="words">Words</option>
          <option value="letter">letter</option>
          <option value="asdfsss">asdf</option>
        </select>
        <button className="px-4 py-2 border border-red-700 rounded-lg bg-custom-red" onClick={handleGenerate}>
          Generate!
        </button>
      </div>
     
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: output }}></div>
    </div>
  );
};

export default LoremIpsumGenerator;
