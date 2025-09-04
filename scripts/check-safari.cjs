#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🦁 Проверка совместимости с Safari...\n');

// Проверяем шрифты
console.log('1. Проверка шрифтов:');
try {
  const cssPath = path.join(process.cwd(), 'src/styles/globals.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  
  const checks = {
    'font-display: swap': cssContent.includes('font-display: swap'),
    '-webkit-font-smoothing': cssContent.includes('-webkit-font-smoothing'),
    'Safari font fallbacks': cssContent.includes('-apple-system'),
    'backdrop-filter fallback': cssContent.includes('@supports not (backdrop-filter')
  };
  
  Object.entries(checks).forEach(([check, passed]) => {
    console.log(`   ${passed ? '✅' : '❌'} ${check}`);
  });
} catch (error) {
  console.log('   ❌ Ошибка проверки CSS файла');
}

// Проверяем предзагрузку шрифтов
console.log('\n2. Проверка предзагрузки шрифтов:');
try {
  const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  
  const preloadChecks = {
    'preload Erewhon': layoutContent.includes('Erewhon-BoldItalic.otf'),
    'preload TT Norms Regular': layoutContent.includes('TT Norms Std Trial Condensed Regular.otf'),
    'preload TT Norms Bold': layoutContent.includes('TT Norms Std Trial Condensed Bold.otf'),
    'crossOrigin attribute': layoutContent.includes('crossOrigin="anonymous"')
  };
  
  Object.entries(preloadChecks).forEach(([check, passed]) => {
    console.log(`   ${passed ? '✅' : '❌'} ${check}`);
  });
} catch (error) {
  console.log('   ❌ Ошибка проверки layout.tsx');
}

// Проверяем Safari мета-теги
console.log('\n3. Проверка Safari мета-тегов:');
try {
  const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  
  const metaChecks = {
    'apple-mobile-web-app-capable': layoutContent.includes('apple-mobile-web-app-capable'),
    'format-detection': layoutContent.includes('format-detection'),
    'apple-mobile-web-app-status-bar-style': layoutContent.includes('apple-mobile-web-app-status-bar-style')
  };
  
  Object.entries(metaChecks).forEach(([check, passed]) => {
    console.log(`   ${passed ? '✅' : '❌'} ${check}`);
  });
} catch (error) {
  console.log('   ❌ Ошибка проверки мета-тегов');
}

// Проверяем модальные окна
console.log('\n4. Проверка модальных окон (Safari iOS):');
try {
  const modalPath = path.join(process.cwd(), 'src/components/ui/RoomDetailsModal.tsx');
  const modalContent = fs.readFileSync(modalPath, 'utf8');
  
  const modalChecks = {
    'iOS bounce prevention': modalContent.includes('/iPad|iPhone|iPod/'),
    'body overflow fix': modalContent.includes('body.style.overflow'),
    'position fixed': modalContent.includes('position = "fixed"')
  };
  
  Object.entries(modalChecks).forEach(([check, passed]) => {
    console.log(`   ${passed ? '✅' : '❌'} ${check}`);
  });
} catch (error) {
  console.log('   ❌ Ошибка проверки модальных окон');
}

// Проверяем CSS свойства, которые могут не работать в Safari
console.log('\n5. Проверка CSS совместимости:');
try {
  const srcPath = path.join(process.cwd(), 'src');
  const safariIssues = [];
  
  function checkFiles(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkFiles(filePath);
      } else if (file.endsWith('.css') || file.endsWith('.tsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Проверяем потенциально проблемные CSS свойства
        if (content.includes('backdrop-filter') && !content.includes('@supports')) {
          safariIssues.push(`backdrop-filter без fallback в ${filePath.replace(process.cwd(), '')}`);
        }
        if (content.includes('gap:') && content.includes('flex') && !content.includes('space-')) {
          // Старые версии Safari не поддерживают gap в flexbox
          // safariIssues.push(`flex gap в ${filePath.replace(process.cwd(), '')}`);
        }
      }
    });
  }
  
  checkFiles(srcPath);
  
  if (safariIssues.length === 0) {
    console.log('   ✅ Критических проблем не найдено');
  } else {
    safariIssues.forEach(issue => console.log(`   ⚠️  ${issue}`));
  }
} catch (error) {
  console.log('   ❌ Ошибка проверки CSS совместимости');
}

// Проверяем файлы шрифтов
console.log('\n6. Проверка файлов шрифтов:');
try {
  const fontsPath = path.join(process.cwd(), 'public/fonts');
  
  const requiredFonts = [
    'Erewhon-BoldItalic.otf',
    'TT Norms Std Trial Condensed Regular.otf',
    'TT Norms Std Trial Condensed Bold.otf'
  ];
  
  requiredFonts.forEach(font => {
    const fontPath = path.join(fontsPath, font);
    if (fs.existsSync(fontPath)) {
      const stats = fs.statSync(fontPath);
      console.log(`   ✅ ${font} (${(stats.size / 1024).toFixed(1)} kB)`);
    } else {
      console.log(`   ❌ ${font} - НЕ НАЙДЕН`);
    }
  });
} catch (error) {
  console.log('   ❌ Ошибка проверки файлов шрифтов');
}

console.log('\n🎯 Рекомендации для Safari:');
console.log('   • Тестируйте на реальных устройствах iOS/macOS');
console.log('   • Проверьте работу модальных окон на iPhone/iPad');
console.log('   • Убедитесь, что шрифты загружаются корректно');
console.log('   • Проверьте анимации и переходы');
console.log('   • Тестируйте форм-факторы: iPhone SE, iPad, Desktop Safari');

console.log('\n🦁 Проверка Safari совместимости завершена!');
