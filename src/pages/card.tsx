import * as React from 'react';
import { useState, useEffect } from 'react';
import DarkModeToggle from '@/components/UI/DarkModeToggle';

interface IndexProps  {}

const Index: React.FunctionComponent<IndexProps> = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
      <div className="absolute top-4 right-4">
        <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 dark:from-cyan-600 dark:to-blue-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white dark:bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400">สวัสดีครับ! ยินดีต้อนรับสู่ Next Auth Demo</h1>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
                <p>นี่คือตัวอย่างเทคโนโลยีที่ใช้ในโปรเจกต์นี้:</p>
                <ul className="list-none space-y-2 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <li className="font-mono text-sm">
                    <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">npm install next react react-dom typescript</code>
                  </li>
                  <li className="font-mono text-sm">
                    <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">npm install tailwindcss postcss autoprefixer</code>
                  </li>
                  <li className="font-mono text-sm">
                    <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">npx tailwindcss init -p</code>
                  </li>
                </ul>
                <ul className="list-disc space-y-2">
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="ml-2">
                      ใช้งานง่าย
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="ml-2">
                      ปลอดภัยด้วย Next Auth
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="ml-2">
                      สวยงามด้วย Tailwind CSS
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>ต้องการเรียนรู้เพิ่มเติม?</p>
                <p>
                  <a href="#" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"> อ่านเอกสารประกอบ &rarr; </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;