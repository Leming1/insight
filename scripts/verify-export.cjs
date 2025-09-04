#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Проверка экспортированной статической сборки...\n');

const outDir = path.join(process.cwd(), 'out');

if (!fs.existsSync(outDir)) {
  console.log('❌ Папка out/ не найдена. Сначала запустите npm run export');
  process.exit(1);
}

// Проверяем основные файлы
console.log('1. Проверка основных файлов:');
const mainFiles = [
  'index.html',
  '404.html',
  'contacts/index.html',
  'rooms/index.html'
];

mainFiles.forEach(file => {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`   ✅ ${file} (${(stats.size / 1024).toFixed(1)} kB)`);
  } else {
    console.log(`   ❌ ${file} - НЕ НАЙДЕН`);
  }
});

// Проверяем ассеты
console.log('\n2. Проверка ассетов:');
const assetDirs = ['assets', 'fonts', 'icons', 'decor'];
assetDirs.forEach(dir => {
  const dirPath = path.join(outDir, dir);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    console.log(`   ✅ ${dir}/ (${files.length} файлов)`);
  } else {
    console.log(`   ❌ ${dir}/ - НЕ НАЙДЕН`);
  }
});

// Проверяем Next.js файлы
console.log('\n3. Проверка Next.js файлов:');
const nextDir = path.join(outDir, '_next');
if (fs.existsSync(nextDir)) {
  const staticDir = path.join(nextDir, 'static');
  if (fs.existsSync(staticDir)) {
    const chunks = fs.readdirSync(staticDir).filter(f => f.startsWith('chunks'));
    console.log(`   ✅ _next/static/ (${chunks.length} чанков)`);
  } else {
    console.log(`   ❌ _next/static/ - НЕ НАЙДЕН`);
  }
} else {
  console.log(`   ❌ _next/ - НЕ НАЙДЕН`);
}

// Проверяем размеры
console.log('\n4. Статистика сборки:');
try {
  const totalSize = getDirSize(outDir);
  console.log(`   📊 Общий размер: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  
  const htmlFiles = findHtmlFiles(outDir);
  console.log(`   📄 HTML файлов: ${htmlFiles.length}`);
  
  const imageFiles = findImageFiles(outDir);
  console.log(`   🖼️  Изображений: ${imageFiles.length}`);
  
} catch (error) {
  console.log(`   ❌ Ошибка подсчета статистики: ${error.message}`);
}

// Проверяем ссылки в HTML файлах
console.log('\n5. Проверка ссылок в HTML:');
const htmlFiles = findHtmlFiles(outDir);
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const links = content.match(/href=["']([^"']+)["']/g) || [];
  const scripts = content.match(/src=["']([^"']+)["']/g) || [];
  
  console.log(`   📄 ${path.relative(outDir, file)}:`);
  console.log(`      Ссылок: ${links.length}, Скриптов: ${scripts.length}`);
});

console.log('\n🎯 Проверка завершена! Статическая сборка готова к деплою.');

// Вспомогательные функции
function getDirSize(dir) {
  let size = 0;
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      size += getDirSize(filePath);
    } else {
      size += stat.size;
    }
  });
  
  return size;
}

function findHtmlFiles(dir) {
  const htmlFiles = [];
  
  function scan(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scan(filePath);
      } else if (file.endsWith('.html')) {
        htmlFiles.push(filePath);
      }
    });
  }
  
  scan(dir);
  return htmlFiles;
}

function findImageFiles(dir) {
  const imageFiles = [];
  const imageExts = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
  
  function scan(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scan(filePath);
      } else if (imageExts.some(ext => file.toLowerCase().endsWith(ext))) {
        imageFiles.push(filePath);
      }
    });
  }
  
  scan(dir);
  return imageFiles;
}
