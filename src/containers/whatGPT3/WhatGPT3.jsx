import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="If you have ever wondered either what’s GPT-3 and how can it be useful to you or your company, this is the site you were looking for." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="" />
      <Feature title="Knowledgebase" text="b" />
      <Feature title="Education" text="B.s" />
    </div>
  </div>
);

export default WhatGPT3;