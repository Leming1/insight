#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Проверка готовности к экспорту...\n');

// Проверяем next.config.js
console.log('1. Проверка next.config.js:');
try {
  const configPath = path.join(process.cwd(), 'next.config.js');
  const configContent = fs.readFileSync(configPath, 'utf8');
  
  const checks = {
    'output: \'export\'': configContent.includes("output: 'export'"),
    'images.unoptimized: true': configContent.includes('unoptimized: true'),
    'trailingSlash: true': configContent.includes('trailingSlash: true')
  };
  
  Object.entries(checks).forEach(([check, passed]) => {
    console.log(`   ${passed ? '✅' : '❌'} ${check}`);
  });
} catch (error) {
  console.log('   ❌ Файл next.config.js не найден');
}

// Проверяем package.json скрипты
console.log('\n2. Проверка package.json:');
try {
  const packagePath = path.join(process.cwd(), 'package.json');
  const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  const hasExportScript = packageContent.scripts && packageContent.scripts.export;
  console.log(`   ${hasExportScript ? '✅' : '❌'} Скрипт export найден`);
} catch (error) {
  console.log('   ❌ Ошибка чтения package.json');
}

// Проверяем использование next/image
console.log('\n3. Проверка использования next/image:');
try {
  const srcPath = path.join(process.cwd(), 'src');
  const imageImports = [];
  
  function checkDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes("from 'next/image'") || content.includes('from "next/image"')) {
          imageImports.push(filePath.replace(process.cwd(), ''));
        }
      }
    });
  }
  
  checkDirectory(srcPath);
  
  if (imageImports.length === 0) {
    console.log('   ✅ next/image не используется');
  } else {
    console.log('   ❌ next/image используется в файлах:');
    imageImports.forEach(file => console.log(`      ${file}`));
  }
} catch (error) {
  console.log('   ❌ Ошибка проверки файлов');
}

// Проверяем наличие API роутов
console.log('\n4. Проверка API роутов:');
try {
  const apiPath = path.join(process.cwd(), 'src/app/api');
  if (fs.existsSync(apiPath)) {
    console.log('   ❌ API роуты найдены - не подходят для статического экспорта');
  } else {
    console.log('   ✅ API роутов нет');
  }
} catch (error) {
  console.log('   ✅ API роутов нет');
}

// Проверяем использование серверных функций
console.log('\n5. Проверка серверных функций:');
try {
  const srcPath = path.join(process.cwd(), 'src');
  const serverFunctions = [];
  
  function checkServerFunctions(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkServerFunctions(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('cookies()') || content.includes('headers()') || content.includes('next/server')) {
          serverFunctions.push(filePath.replace(process.cwd(), ''));
        }
      }
    });
  }
  
  checkServerFunctions(srcPath);
  
  if (serverFunctions.length === 0) {
    console.log('   ✅ Серверные функции не используются');
  } else {
    console.log('   ❌ Серверные функции найдены в файлах:');
    serverFunctions.forEach(file => console.log(`      ${file}`));
  }
} catch (error) {
  console.log('   ❌ Ошибка проверки файлов');
}

console.log('\n🎯 Готово! Запустите npm run export для создания статической сборки.');
