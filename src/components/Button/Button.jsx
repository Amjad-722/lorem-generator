import React, { useState } from 'react';

const loremIpsumText = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

const Button = () => {
  const [count, setCount] = useState(1);
  const [type, setType] = useState('paragraphs');
  const [output, setOutput] = useState('');

  const handleGenerate = () => {
    let generatedText = '';

    switch (type) {
      case 'paragraphs':
        for (let i = 0; i < count; i++) {
          generatedText += `<p>${loremIpsumText.join(' ')}</p>`;
        }
        break;
      case 'sentences':
        for (let i = 0; i < count; i++) {
          generatedText += `${loremIpsumText[i % loremIpsumText.length]} `;
        }
        break;
      case 'words':
        const words = loremIpsumText.join(' ').split(' ');
        for (let i = 0; i < count; i++) {
          generatedText += `${words[i % words.length]} `;
        }
        break;
      default:
        break;
    }

    setOutput(generatedText);
  };

  return (
    <div className="container mx-auto my-8 p-4 w-full max-w-2xl bg-gray-200 border border-gray-400 rounded-lg">
      <h1 className="text-center mb-4 text-xl font-bold">Lorem Ipsum Generator</h1>
      <div className="flex flex-row space-x-4">
        <input
          className="py-2 px-1 border border-red-700 rounded-lg bg-custom-red w-1/12"
          type="number"
          id="count"
          name="count"
          min="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <select
          className="py-2 px-1 border border-red-700 rounded-lg bg-custom-red"
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="paragraphs">Paragraphs</option>
          <option value="sentences">Sentences</option>
          <option value="words">Words</option>
        </select>
        <button className="px-4 py-2 border border-red-700 rounded-lg bg-custom-red" onClick={handleGenerate}>
          Generate!
        </button>
      </div>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: output }}></div>
    </div>
  );
};

export default Button;
